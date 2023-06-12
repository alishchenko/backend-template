import knex, { Knex } from 'knex'

import { UserQ } from '@data/postgress/user'
import { config } from '@/config'

const databaseClient = 'pg'

export class DB {
  private db: Knex

  constructor() {
    this.db = knex({
      client: databaseClient,
      connection: config.DB_URL,
    })    
  }

  public users(): UserQ {
    return new UserQ(this.db).new()
  }

  public transaction(fn: () => Promise<void>): Promise<void> {
    return this.db.transaction(async () => {
      await fn()
    })
  }
}