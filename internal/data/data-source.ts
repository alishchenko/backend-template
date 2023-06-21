import { DataSource } from 'typeorm'

import { config } from '@/config'

export const AppDataSource = new DataSource({
  type: 'postgres',
  url: config.DB_URL,
  synchronize: false,
  logging: true,
  entities: ['./internal/data/entity/*.ts'],
  migrations: ['./internal/data/migrations/*.ts'],
})
