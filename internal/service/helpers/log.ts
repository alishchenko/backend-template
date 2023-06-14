import winston from 'winston'

import { config } from '@/config'

export const logger = winston.createLogger({
  level: config.LEVEL_INFO,
  format: winston.format.json(),
  transports: [new winston.transports.Console()],
})
