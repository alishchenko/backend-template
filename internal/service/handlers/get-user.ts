import { Request, Response } from 'express'

import { db, createResource, statusTypes } from '@/helpers'
import { newUserById } from '@/requests'
import { UserTypeEnum } from '@resources'
 
export async function getUserById(req: Request, res: Response){
  const id = newUserById(req)
  const user = await db.users().new().filterByID([id]).get()  
  if (typeof(user) === 'undefined') {    
    res.status(statusTypes.NOT_FOUND).send('user not found')
    return
  }
  res.status(200).send(
    createResource({ type: UserTypeEnum.Users, ...user }))
}
