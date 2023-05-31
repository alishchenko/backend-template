require("dotenv").config();

import http from 'http';

const PORT = Number(process.env.PORT) ?? 8080;
const HOST = process.env.HOST ?? 'localhost';
const URL = `http://${HOST}:${PORT}`

import express from 'express';

import {router} from './router';

const app = express();
const server = http.createServer(app);

app.use(express.json({ limit: '50mb' }));
app.use(router);

export const Run = function () {
    server.listen(PORT, HOST, () => console.log(URL));
}

exports.server = app;