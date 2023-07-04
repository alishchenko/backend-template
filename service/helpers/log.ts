import winston from 'winston'

import { loadConfiguration } from '@/config'

export function createLogger() {
  const globalConfiguration = loadConfiguration()

  return winston.createLogger({
    level: globalConfiguration ? globalConfiguration.log.level : 'info',
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
      winston.format.printf(({ level, message, timestamp }) => {
        return `[${timestamp}] ${level}: ${message}`
      }),
    ),
    transports: [new winston.transports.Console()],
  })
}
