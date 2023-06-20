import http from 'http'
import express from 'express'

import { config } from '@/config'
import { logger } from '@/helpers'
import { router } from '@/router'

const PORT = config.PORT
const HOST = config.HOST
const URL = `http://${HOST}:${PORT}`

const app = express()
const server = http.createServer(app)

app.use(express.json({ limit: '50mb' }))
app.use(router)

export const run = function () {
  server.listen(PORT, HOST, () => logger.debug(URL))
}

exports.server = app
