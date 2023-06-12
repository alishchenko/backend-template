import { Request, Response } from 'express'

import { db } from '@/helpers'
import { newUpdateUserRequest } from '@/requests/update-user'

export async function updateUserById(req: Request, res: Response){
  const request = newUpdateUserRequest(req)

  await db.users().new().update({
    name: request.attributes.name,
    age: request.attributes.age,
    role: request.attributes.role,
  }, Number(request.id))
  res.status(204).end()
}
