import winston from 'winston'

import { config } from '@/config'

export const logger = winston.createLogger({
  level: config ? config.LEVEL_INFO : 'info',
  format: winston.format.json(),
  transports: [new winston.transports.Console()],
})
