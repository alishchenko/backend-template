import { AppDataSource } from '@data'
import express from 'express'
import http from 'http'

import { getConfig } from '@/config'
import { createLogger } from '@/helpers'
import { router } from '@/router'

const config = getConfig()
const PORT = config.app.port
const HOST = config.app.host
const URL = `http://${HOST}:${PORT}`

const app = express()
const server = http.createServer(app)
const logger = createLogger()

app.use(express.json({ limit: '50mb' }))
app.use(router)

AppDataSource.initialize().catch(error => logger.debug(error))

export const run = function () {
  server.listen(PORT, HOST, () => logger.debug(URL))
}

exports.server = app