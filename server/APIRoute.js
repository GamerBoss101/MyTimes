import express from 'express';

import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

export default class APIRoute {
    constructor(path = '/') {
        this.path = "/api" + path;
        this.router = express.Router();
        this.router.use(cookieParser());
        this.router.use(bodyParser.json());
        this.router.use(bodyParser.urlencoded({ extended: true }));
        this.router.get("/", this.get);
        this.router.post("/", this.post);
    }

    addSubRoute(name, method, callback) {
        this.router[method](name, callback);
    }

    async get(req, res) {
        res.send('GET request');
    }

    async post(req, res) {
        res.send('POST request'); 
    }

    getPath() {
        return this.path;
    }

    getRouter() {
        return this.router;
    }

}