import { Knex } from 'knex'

import { UserDB } from '@/types'

const userTableName = 'users',
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

  new(): UserQ {
    return new UserQ(this.knex)
  }

  async insert(data: UserDB): Promise<number> {
    const [{ id }] = await this.query
      .insert({
        name: data.name,
        age: data.age,
        role: data.role,
        created_at: data.created_at,
      })
      .returning(userTableIdColumn)

    return id
  }

  async get(): Promise<UserDB> {
    const result = await this.query.select('*').first()
    return result
  }

  async select(): Promise<UserDB[]> {
    const result = await this.query.select('*')

    return result
  }

  async delete() {
    await this.query.delete()

    return
  }

  filterByID(id: number[]): UserQ {
    this.query = this.query.whereIn(userTableIdColumn, id)
    return this
  }

  filterByAge(age: number[]): UserQ {
    this.query = this.query.whereIn(userTableAgeColumn, age)
    return this
  }

  filterByRole(role: boolean[]): UserQ {
    this.query = this.query.whereIn(userTableRoleColumn, role)
    return this
  }

  filterByName(name: string[]): UserQ {
    this.query = this.query.whereIn(userTableNameColumn, name)
    return this
  }

  page(params: {
    pageLimit: number
    pageNumber: number
    pageOrder: string
  }): UserQ {
    this.query = this.query
      .limit(params.pageLimit)
      .offset(params.pageNumber * params.pageLimit)
      .orderBy('id', params.pageOrder)
    return this
  }

  async update(updater: UserDB, id: number): Promise<void> {
    await this.query.where(userTableIdColumn, id).update(updater)
  }
}
