import { AppDataSource, config } from '@data'
import express from 'express'
import http from 'http'

import { createLogger } from '@/helpers'
import { router } from '@/router'

const PORT = config.app.port
const HOST = config.app.host
const URL = `http://${HOST}:${PORT}`

const app = express()
const server = http.createServer(app)

app.use(express.json({ limit: '50mb' }))
app.use(router)

export const logger = createLogger()

AppDataSource.initialize().catch(error => logger.debug(error))
export const run = function () {
  server.listen(PORT, HOST, () => logger.debug(URL))
}
