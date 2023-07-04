import { DataSource } from 'typeorm'

import { getConfig } from '@/config'

export const config = getConfig()

export const AppDataSource = new DataSource({
  type: 'postgres',
  url: config.db.url,
  synchronize: false,
  logging: true,
  entities: ['./data/entity/*.ts'],
  migrations: ['./data/migrations/*.ts'],
})
