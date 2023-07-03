import winston from 'winston'

import { loadConfiguration } from '@/config'

export function createLogger() {
  const globalConfiguration = loadConfiguration()
  return winston.createLogger({
    level: globalConfiguration ? globalConfiguration.log.level : 'info',
    format: winston.format.json(),
    transports: [new winston.transports.Console()],
  })
}
