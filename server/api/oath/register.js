import APIRoute from '../../APIRoute';

export default class Register extends APIRoute {

    constructor() {
        super("/auth/register");
    }

    async post(req, res) {

        console.log(req.body);
        if (req.app.get("session").getSessionValue(req.cookies.auth)) return res.status(400).json({ error: "Already logged in", status: 400 });
        if (!req.body.username || !req.body.password) return res.status(400).json({ error: "Missing username or password", status: 400 });
        let user = await req.app.get("mongo").users.get(req.body.username);
        if (user) return res.status(400).json({ error: "User already exists", status: 400 });
        await req.app.get("mongo").users.create(req.body);
        return res.status(200).json({ status: 200 });
    }
    
}