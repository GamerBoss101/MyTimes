import APIRoute from '../APIRoute';

export default class Login extends APIRoute {

    constructor() {
        super("/users");
    }

    async post(req, res) {
        
        if(req.cookies.auth || req.app.get("session").getSessionValue(req.cookies.auth)) return res.status(400).json({ error: "Already logged in", status: 400 });

        if (!req.body.username || !req.body.password) return res.status(400).json({ error: "Missing username or password", status: 400 });

        let auth = await req.app.get("mongo").users.authenticate(req.body.username, req.body.password);
        if (!auth) return res.status(400).json({ error: "Invalid username or password", status: 400 });

        let user = await req.app.get("mongo").users.getByUsername(req.body.username);

        let session = req.app.get("session").createSession(user);
        res.cookie("auth", session, { maxAge: 900000, httpOnly: true });

        return res.status(200).json({ status: 200, user: user });
    }

}