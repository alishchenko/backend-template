import { BadRequestError } from '@/helpers/errors'
import { Request } from 'express'

export function newUserByIdRequest(req: Request): number {
  const id = Number(req.params.id)

  if (id <= 0 || isNaN(id)) throw new BadRequestError('id is invalid')

  return id
}
