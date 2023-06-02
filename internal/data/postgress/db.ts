import { UserQ } from './user';
import knex, { Knex } from 'knex';
import config from '../../../config';
class DB {

  private db: Knex;

  constructor() {
    this.db = knex({
      client: 'pg',
      connection: config.DB_URL,
    });    
  }

  public New(): DB {
    return new DB();
  }

  public Users(): UserQ {
    return new UserQ(this.db).New();
  }

  public Transaction(fn: () => Promise<void>): Promise<void> {
    return this.db.transaction(async () => {
      await fn();
    });
  }
}

export function NewDB(): DB {
  return new DB();
}
