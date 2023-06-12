import { Request } from 'express'

import { UpdateUser, UpdateUserFromJSONTyped } from '@resources'

export function newUpdateUserRequest(req: Request): UpdateUser {
  try {
    const request = UpdateUserFromJSONTyped(req.body.data, true)
    request.id = req.params.id
    return request
        
  } catch (error) {
    return error
  }
}
