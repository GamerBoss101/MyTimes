import APIRoute from '../../APIRoute.js';

export default class DiscordAuth extends APIRoute {
    constructor() {
        super('/auth/discord');
        super.addSubRoute('/callback', 'get', this.getCallback);
        super.addSubRoute('/user', 'get', this.getUserData);
        super.addSubRoute('/logout', 'get', this.logout);
    }

    async get(req, res) {
        if(Object.keys(req.cookies).includes("discord")) return res.redirect(process.env.PANEL_URL);
        res.redirect(`https://discord.com/api/oauth2/authorize` +
        `?client_id=${process.env.CLIENT_ID}` +
        `&redirect_uri=${encodeURIComponent(process.env.PANEL_CALLBACK)}` +
        `&response_type=code&scope=${encodeURIComponent("identify")}`);
    }

    async getCallback(req, res) {
        const accessCode = req.query.code;
        if (!accessCode) return res.status(400).send('No access code provided');

        const data = new FormData();
        data.append('client_id', process.env.CLIENT_ID);
        data.append('client_secret', process.env.CLIENT_SECRET);
        data.append('grant_type', 'authorization_code');
        data.append('redirect_uri', process.env.PANEL_CALLBACK);
        data.append('scope', 'identify');
        data.append('code', accessCode);

        const json = await (await fetch('https://discord.com/api/oauth2/token', {method: 'POST', body: data})).json();

        if (!json.access_token) return
        res.cookie('discord', json.access_token, { maxAge: 600000 * 3 });
        return res.redirect(process.env.PANEL_URL);
    }

    async getUserData(req, res) {
        const data1 = await fetch(`https://discord.com/api/users/@me`, { headers: { Authorization: `Bearer ${req.cookies.discord}` } });
        if(data1.status !== 200) return res.status(401).json({ error: "Unauthorized", status: 401 });
        let data2 = await (data1).json(); // Fetching user data
        return res.json(data2);
    }

    async logout(req, res) {
        res.clearCookie('discord');
        return res.redirect("/");
    }
    
}
