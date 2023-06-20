import { DataSource } from 'typeorm'

import { logger } from '@/helpers'
import { config } from '@/config'

export const AppDataSource = new DataSource({
  type: 'postgres',
  url: config.DB_URL,
  synchronize: true,
  logging: true,
  entities: ['entity/*.ts'],
  migrations: ['migration/*.ts'],
})

AppDataSource.initialize().catch(error => logger.debug(error))
