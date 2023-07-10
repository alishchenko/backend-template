import { plainToClass } from 'class-transformer'
import { IsBoolean, IsNumber, IsString, Min } from 'class-validator'
import { Request } from 'express'

import { validateRequest } from '@/dtos'
import { BadRequestError } from '@/helpers/errors'

export class UpdateUserRequest {
  @IsNumber()
  id: number

  @IsString()
  name: string

  @IsNumber()
  @Min(14)
  age: number

  @IsBoolean()
  role: boolean
}

export function newUpdateUserRequest(req: Request): UpdateUserRequest {
  if (!req.body.data || !req.body.data.attributes)
    throw new BadRequestError({ detail: 'Not JSON API request' })

  const request = plainToClass(UpdateUserRequest, {
    id: Number(req.params.id),
    ...req.body.data.attributes,
  })

  validateRequest(request)
  return request
}
