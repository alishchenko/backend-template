import { Request } from 'express'

import { UpdateUser, UpdateUserFromJSONTyped } from '@resources'
import { BadRequestError } from '@/helpers/errors'

export function newUpdateUserRequest(req: Request): UpdateUser {
  const request = UpdateUserFromJSONTyped(req.body.data, true)
  request.id = req.params.id

  if (
    (typeof request.attributes.name !== 'string' &&
      request.attributes.name !== undefined) ||
    (typeof request.attributes.age !== 'number' &&
      request.attributes.age !== undefined) ||
    (typeof request.attributes.role !== 'boolean' &&
      request.attributes.role !== undefined) ||
    Number(request.id) <= 0 ||
    isNaN(Number(request.id))
  )
    throw new BadRequestError('failed to parce create user request')

  return request
}
