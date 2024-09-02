import APIRoute from '../APIRoute';

export default class Login extends APIRoute {

    constructor() {
        super("/lb");
    }

    async get(req, res) {

        let session = req.app.get("session").getSessionValue(req.cookies.auth);
        if (!session) return res.status(400).json({ error: "Not logged in", status: 400 });

        let user = await req.app.get("mongo").users.get(session);

        console.log(user);

        return res.status(200).json({ status: 200, user: user });
    }

}