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
export const run = () => {
  server.listen(PORT, HOST, () => {
    logger.debug(`Server running at ${URL}`)
  })

  server.on('error', error => {
    logger.error('Server error:', error)
    process.exit(1)
  })
}

const shutdown = async () => {
  logger.debug('Shutting down gracefully...')

  server.close(async error => {
    if (error) {
      logger.error('Error occurred while closing the server:', error)
      process.exit(1)
    }

    logger.debug('Server closed. Waiting for ongoing requests to complete...')

    const timeout = setTimeout(() => {
      logger.warn('Forcefully terminating the process due to ongoing requests...')
      process.exit(1)
    }, 5000)

    try {
      await AppDataSource.destroy()

      clearTimeout(timeout)
      logger.debug('Shutdown complete. Exiting...')
      process.exit(0)
    } catch (error) {
      logger.error('Error occurred during cleanup:', error)
      process.exit(1)
    }
  })
}

process.on('SIGINT', shutdown)
process.on('SIGINT', shutdown)
