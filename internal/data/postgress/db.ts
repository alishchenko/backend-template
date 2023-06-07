import { UserQ } from './user'
import knex, { Knex } from 'knex'
import config from '../../../config'

class DB {
  private db: Knex

  constructor() {
    // FIXME: what is 'pg'? - put to variable with self-explaining name
    this.db = knex({
      client: 'pg',
      connection: config.DB_URL,
    })    
  }

  public New(): DB {
    return new DB()
  }

  public Users(): UserQ {
    return new UserQ(this.db).New()
  }

  public Transaction(fn: () => Promise<void>): Promise<void> {
    return this.db.transaction(async () => {
      await fn()
    })
  }
}

// FIXME: for what do you need this function? 
/*
  you can just 'new DB().YourQuery().Build()'
  or make New() method static and 'DB.New().YourQuery().Build()'

  by the way. For what do you need new DB instance if it doesn't store any info?
*/
export function NewDB(): DB {
  return new DB()
}
