import { Request } from 'express';


export function NewUserById(req: Request): number {
  return Number(req.params.id);
}
