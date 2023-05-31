import { User } from "../user";
import knex, { Knex } from 'knex';

const
userTableName = 'users',
userTableIdColumn = 'id',
userTableNameColumn = 'name',
userTableAgeColumn = 'age',
userTableRoleColumn = 'role'


export class UserQ {
  private knex: Knex;

  constructor(knex: Knex) {
    this.knex = knex;
  }

  New(): UserQ {
    return new UserQ(this.knex);
  }

  async Insert(data: User): Promise<number> {
    const [id] = await this.knex(userTableName).insert({
      name: data.name,
      age: data.age,
      role: data.role,
      created_at: data.created_at,
    }).returning(userTableIdColumn);

    return id;
  }
  async Get(): Promise<User | null> {
    const result = await this.knex
      .select('*').from(userTableName).first();
    return result;
  }

  async Select(): Promise<User[]> {
    const result = await this.knex.select('user.*').from(userTableName)
    return result;
  }

  FilterByID(...id: number[]): UserQ {
    this.knex.whereIn(userTableIdColumn, id);
    return this;
  }

  FilterByAge(...age: number[]): UserQ {
    this.knex.whereIn(userTableAgeColumn, age);
    return this;
  }

  FilterByName(...name: string[]): UserQ {
    this.knex.whereIn(userTableNameColumn, name.map((a) => a.toLowerCase()));
    return this;
  }

  Page(params: { limit: number; offset: number }): UserQ {
    this.knex.limit(params.limit).offset(params.offset);
    return this;
  }

  async Update(updater: User, id: number): Promise<void> {
    await this.knex(userTableName).where(userTableIdColumn, id).update(updater);
  }
}
