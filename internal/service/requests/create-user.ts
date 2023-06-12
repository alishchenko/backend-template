import { Request } from 'express'

import { CreateUserFromJSONTyped, CreateUser } from '@resources'

export function newCreateUserRequest(r: Request): CreateUser {
  try {
    const request = CreateUserFromJSONTyped(r.body.data, true)
    return request
        
  } catch (error) {
    // FIXME: throw error wih status code 400
    return error
  }
}
