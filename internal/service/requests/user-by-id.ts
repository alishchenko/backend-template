import { Request } from 'express'

export function newUserById(req: Request): number {
  return Number(req.params.id)
}
