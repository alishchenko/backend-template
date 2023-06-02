import http from 'http';
import { logger } from './helpers/log';
import config from '../../config';

const PORT = config.PORT ?? 8080;
const HOST = config.HOST ?? 'localhost';
const URL = `http://${HOST}:${PORT}`;

import express from 'express';

import { router } from './router';

const app = express();
const server = http.createServer(app);

app.use(express.json({ limit: '50mb' }));
app.use(router);

export const Run = function () {
  server.listen(PORT, HOST, () => logger.debug(URL));
};

exports.server = app;