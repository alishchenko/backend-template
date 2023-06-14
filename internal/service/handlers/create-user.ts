import { Request, Response } from 'express'

import { db } from '@/helpers'
import { newCreateUserRequest } from '@/requests'
import { CreateUserTypeEnum } from '@resources'
import { HTTP_STATUS_CODES } from '@/enums'
import { getErrorResponse } from '@/helpers/errors'

export async function createUser(req: Request, res: Response) {
  try {
    const request = newCreateUserRequest(req)
    const createdAt = new Date()

    const id = await db.users().insert({
      id: undefined,
      role: request.attributes.role,
      age: request.attributes.age,
      name: request.attributes.name,
      created_at: createdAt,
    })

    res.status(HTTP_STATUS_CODES.CREATED).send({
      id: id,
      type: CreateUserTypeEnum.CreateUsers,
    })
  } catch (error) {
    res
      .status(error.status ? error.status : HTTP_STATUS_CODES.INTERNAL_ERROR)
      .send(getErrorResponse(error))
  }
}
