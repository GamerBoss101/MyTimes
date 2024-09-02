// @ts-nocheck
import { handler } from '../build/handler.js';
import dotenv from 'dotenv';
import http from 'http';
import express from 'express';
import cors from 'cors';
import fs from 'fs';
import ms from 'ms';
import Mongo from './storage/Mongo.js';
import APISession from './APISession.js';

dotenv.config();

const app = express();
const server = http.Server(app);
const MongoServer = new Mongo(process.env.MONGO_URI);

app.use(cors());
app.set("mongo", MongoServer);
app.set("session", new APISession());

async function loadFolder(filePath) {
    let files = [];
    fs.readdirSync(filePath).forEach(file => {
        if (fs.lstatSync(`${filePath}/${file}`).isDirectory()) {
            loadFolder(`${filePath}/${file}`);
        } else {
            files.push(`${filePath}/${file}`);
        }
    });
    return files;
}

async function loadFiles(filePath) {
    const file = await import(`../${filePath}`);
    if (file.default) {
        let route = new file.default();
        app.use(route.path, route.getRouter());
        console.log(`Loaded ${route.path}`);
    }
}

try {
    fs.readdirSync('./server/api').forEach(async(file) => {
        if (fs.lstatSync(`./server/api/${file}`).isDirectory()) {
            let files = await loadFolder(`./server/api/${file}`);
            files.forEach(async(file) => {
                await loadFiles(file);
            });
        } else {
            await loadFiles(`./server/api/${file}`);
        }
    });
} catch (e) {
    console.log(e);
} finally {
    setTimeout(() => {
        console.log('API loaded');
        app.use(handler);
    }, ms('1s'));
}

server.listen(process.env.PORT, () => {
    console.log(`listening on port http://localhost:${process.env.PORT}`);
});


process.on('unhandledRejection', (reason, promise) => {
    console.log('Unhandled Rejection at:', reason.stack || reason);
});

process.on('uncaughtException', (error) => {
    console.log('Uncaught Exception thrown');
    console.error(error);
});