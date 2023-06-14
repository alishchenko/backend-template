import { Request } from 'express'

import { CreateUserFromJSON, CreateUser } from '@resources'
import { BadRequestError } from '@/helpers/errors'

export function newCreateUserRequest(r: Request): CreateUser {
  const request = CreateUserFromJSON(r.body.data)

  if (
    typeof request.attributes.name !== 'string' ||
    typeof request.attributes.age !== 'number' ||
    typeof request.attributes.role !== 'boolean'
  )
    throw new BadRequestError('failed to parce create user request')

  return request
}
