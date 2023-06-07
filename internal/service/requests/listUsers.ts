import { Request } from 'express'

// FIXME: naming. It is filters, not request
export interface ListUsersRequest {
  id?: number[];
  name?: string[];
  age?: number[];
  role?: boolean[];
}

// FIXME: refactor using guard classes
export function NewListUsersRequest(req: Request): ListUsersRequest {
  const filter = req.query.filter as ListUsersRequest
  
  if (filter) { 
    if (filter.id) {
      filter.id = [...(filter.id instanceof Array 
        ? filter.id.map((id)=> id as number) 
        : [filter.id as number])]
    }
  
    if (filter.name) {
      filter.name = [
        ...(filter.name instanceof Array ? filter.name : [filter.name]),
      ]
    }
    if (filter.age) {
      filter.age = [...(filter.age instanceof Array 
        ? filter.age 
        : [filter.age as number])]
    }
    if (filter.role) {
      filter.role = [
        ...(filter.role instanceof Array ? filter.role : [filter.role]),
      ]
    }
  }
  return filter
}
