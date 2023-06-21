import { Request } from 'express'

import { validate } from 'class-validator'

import { PAGE_ORDER } from '@/dtos'
import { config } from '@/config'
import { BadRequestError } from '@/helpers/errors'

export class ListUsersRequest {
  filter: {
    name: string[]
    age: number[]
    role: boolean[]
  }
  page: {
    limit: number
    number: number
    order: PAGE_ORDER
  }
  constructor(req: Request) {
    this.page = {
      limit: config.DEFAULT_PAGE_LIMIT,
      number: 0,
      order: PAGE_ORDER.DESC,
    }
    this.filter = {
      name: [],
      age: [],
      role: [],
    }

    const params = req.query
    const pageParams = params.page as typeof params
    const filterParams = params.filter as typeof params

    if (params.page) {
      if (pageParams.number) this.page.number = Number(pageParams.number)
      if (pageParams.limit) this.page.limit = Number(pageParams.limit)
      if (pageParams.order) this.page.order as PAGE_ORDER
    }

    if (!filterParams) return
    if (filterParams.name) {
      this.filter.name =
        filterParams.name instanceof Array
          ? (filterParams.name as string[])
          : [filterParams.name as string]
    }
    if (filterParams.age) {
      this.filter.age = [
        ...(filterParams.age instanceof Array
          ? filterParams.age.map(Number)
          : [Number(filterParams.age)]),
      ]
    }
    if (filterParams.role) {
      this.filter.role = [
        ...(filterParams.role instanceof Array
          ? filterParams.role.map(Boolean)
          : [Boolean(filterParams.role)]),
      ]
    }
  }

  async validateRequest() {
    const errors = await validate(this)

    if (!errors.length) return

    throw new BadRequestError('failed to parse list user request')
  }
}
