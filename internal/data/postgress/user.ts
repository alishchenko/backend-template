import { User } from '../user'
import { Knex } from 'knex'

const
  userTableName = 'users',
  userTableIdColumn = 'id',
  userTableNameColumn = 'name',
  userTableAgeColumn = 'age',
  userTableRoleColumn = 'role'

export class UserQ {
  private knex: Knex
  private query: Knex.QueryBuilder

  constructor(knex: Knex) {
    this.knex = knex
    this.query = knex(userTableName)
  }

  New(): UserQ {
    return new UserQ(this.knex)
  }

  async Insert(data: User): Promise<number> {
    const [id] = await this.query.insert({
      name: data.name,
      age: data.age,
      role: data.role,
      created_at: data.created_at,
    }).returning(userTableIdColumn)

    return id
  }
  // FIXME: check types
  async Get(): Promise<User | null> {
    const result = await this.query
      .select('*').first()
    return result
  }

  async Select(): Promise<User[]> { 
    const result = await this.query.select('*')
    
    return result
  }

  async Delete() {
    await this.query.delete()
    
    return
  }

  FilterByID(id: number[]): UserQ {
    this.query = this.query.whereIn(userTableIdColumn, id)
    return this
  }

  FilterByAge(age: number[]): UserQ {
    this.query = this.query.whereIn(userTableAgeColumn, age)
    return this
  }

  FilterByRole(role: boolean[]): UserQ {
    this.query = this.query.whereIn(userTableRoleColumn, role)
    return this
  }

  FilterByName(name: string[]): UserQ {
    this.query = this.query.whereIn(userTableNameColumn, name)
    return this
  }

  Page(params: { limit: number; offset: number }): UserQ {
    this.query = this.query.limit(params.limit).offset(params.offset)
    return this
  }

  async Update(updater: User, id: number): Promise<void> {
    await this.query.where(userTableIdColumn, id).update(updater)
  }
}
