import { DataSource } from 'typeorm'

import { config } from '@/config'

export const AppDataSource = new DataSource({
  type: 'postgres',
  url: config.DB_URL,
  synchronize: false,
  logging: true,
  entities: ['./data/entity/*.ts'],
  migrations: ['./data/migrations/*.ts'],
})
