import { plainToClass } from 'class-transformer'
import { IsBoolean, IsNumber, IsString, Min, validate } from 'class-validator'
import { Request } from 'express'

import { BadRequestError } from '@/helpers/errors'

export class CreateUserRequest {
  @IsString()
  name: string

  @IsNumber()
  @Min(14)
  age: number

  @IsBoolean()
  role: boolean
}

export function newCreateUserRequest(req: Request): CreateUserRequest {
  if (!req.body.data || !req.body.data.attributes)
    throw new BadRequestError({ detail: 'Not JSON API request' })

  const request = plainToClass(CreateUserRequest, req.body.data.attributes)

  validateRequest(request)
  return request
}

export async function validateRequest(object: object) {
  const errors = await validate(object)

  if (!errors.length) return

  throw new BadRequestError({ detail: 'failed to parse request' })
}
