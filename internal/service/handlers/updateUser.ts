import { Request, Response } from 'express'
import DB from '../helpers/db'
import { NewUpdateUserRequest } from '../requests/updateUser'

export async function UpdateUserById(req: Request, res: Response){
  const request = NewUpdateUserRequest(req)

  await DB.Users().New().Update({
    name: request.attributes.name,
    age: request.attributes.age,
    role: request.attributes.role,
  }, Number(request.id))
  res.status(204).end()
}
