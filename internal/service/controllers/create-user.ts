import { Request, Response } from 'express'

import { AppDataSource } from '@data'
import { User } from '@data/entity'
import {
  CreateUserRequest,
  IdResponse,
  HTTP_STATUS_CODES,
  RESPONSE_TYPES,
} from '@/dtos'
import { getErrorResponse } from '@/helpers/errors'

export async function createUser(req: Request, res: Response) {
  try {
    const request = new CreateUserRequest(req)
    await request.validateRequest()

    const createdAt = new Date()
    const user = new User()
    user.role = request.role
    user.age = request.age
    user.name = request.name
    user.createdAt = createdAt

    const id = (await AppDataSource.manager.save(user)).id

    res
      .status(HTTP_STATUS_CODES.CREATED)
      .send(IdResponse(id, RESPONSE_TYPES.USERS))
  } catch (error) {
    res
      .status(error.status ?? HTTP_STATUS_CODES.INTERNAL_ERROR)
      .send(getErrorResponse(error))
  }
}
