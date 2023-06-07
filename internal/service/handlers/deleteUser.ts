import { Request, Response } from 'express'
import DB from '../helpers/db'
import { NewUserById } from '../requests/userById'

export async function DeleteUserById(req: Request, res: Response){
  const id = NewUserById(req)
  await DB.Users().New().FilterByID([id]).Delete()
  res.status(204).end()
}
