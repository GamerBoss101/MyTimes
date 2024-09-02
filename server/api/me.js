import APIRoute from '../APIRoute';

export default class Login extends APIRoute {

    constructor() {
        super("/me");
    }

    async get(req, res) {
        if (!req.cookies.auth) return res.status(400).json({ error: "Not logged in", status: 400 });

        let session = req.app.get("session").getSessionUser(req.cookies.auth);
        if (!session) return res.status(400).json({ error: "Not logged in", status: 400 });
        
        let user = await req.app.get("mongo").users.get(session);
        return res.status(200).json({ status: 200, user: user });
    }

}