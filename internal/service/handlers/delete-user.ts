import { Request, Response } from 'express'

import { db } from '@/helpers'
import { newUserById } from '@/requests'

export async function deleteUserById(req: Request, res: Response){
  const id = newUserById(req)
  await db.users().new().filterByID([id]).delete()
  res.status(204).end()
}
