import { Request } from 'express'

import { DEFAULT_PAGE_LIMIT, PAGE_ORDER, PageOpts } from '@/dtos'
import { parseFilters, parsePageOpts } from '@/helpers'

type UserFilters = {
  name: string[]
  age: number[]
  role: boolean[]
}

function isUserFiltersKey(key: string): key is string & keyof UserFilters {
  const templateObject: UserFilters = {
    name: [],
    age: [],
    role: [],
  }

  return key in templateObject
}
export class ListUsersRequest {
  filter: UserFilters = {
    name: [],
    age: [],
    role: [],
  }
  page: PageOpts = {
    limit: DEFAULT_PAGE_LIMIT,
    number: 0,
    order: PAGE_ORDER.DESC,
  }
  constructor(req: Request) {
    this.page = {
      ...this.page,
      ...parsePageOpts(req.query),
    }

    this.filter = {
      ...this.filter,
      ...parseFilters<UserFilters>(req.query, isUserFiltersKey),
    }
  }
}
