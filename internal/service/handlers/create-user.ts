import { Request, Response } from 'express'

import { db, logger } from '@/helpers'
import { newCreateUserRequest } from '@/requests'
import { CreateUserTypeEnum } from '@resources'

export async function createUser(req: Request, res: Response) {
  const request = newCreateUserRequest(req)
  const createdAt = new Date

  if (!request) {
    res.status(400).send({ message: request })
  }

  try {
    const id = await db.users().insert({
      id: undefined,
      role: request.attributes.role,
      age:  request.attributes.age,
      name:  request.attributes.name,
      created_at: createdAt,
    })
  
    res.status(201).send({
      id: id,
      type: CreateUserTypeEnum.CreateUsers,
    })
  } catch (error) {
    logger.error(error)
    res.status(500).send({ message: error })
  }
  
}