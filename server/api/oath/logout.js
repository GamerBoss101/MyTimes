import APIRoute from '../../APIRoute';

export default class Logout extends APIRoute {

    constructor() {
        super("/auth/logout");
    }

    async post(req, res) {
        if (!req.cookies.auth) return res.status(400).json({ error: "Not logged in", status: 400 });
        req.get("session").deleteSession(req.session.user);
        res.clearCookie("auth");
        return res.status(200).json({ status: 200 });
    }
    
}