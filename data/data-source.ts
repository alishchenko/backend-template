import { DataSource } from 'typeorm'

import { config } from '@'

export const AppDataSource = new DataSource({
  type: 'postgres',
  url: config.db.url,
  synchronize: false,
  logging: true,
  entities: ['./data/entity/*.ts'],
  migrations: ['./data/migrations/*.ts'],
})
