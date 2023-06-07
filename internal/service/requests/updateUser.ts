import { UpdateUser, UpdateUserFromJSONTyped } from '../../../resources'
import { Request } from 'express'

export function NewUpdateUserRequest(req: Request): UpdateUser {
  try {
    const request = UpdateUserFromJSONTyped(req.body.data, true)
    request.id = req.params.id
    return request
        
  } catch (error) {
    return error
  }
}
