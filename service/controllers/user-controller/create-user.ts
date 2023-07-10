import { AppDataSource, User } from '@data'
import { Request, Response } from 'express'

import { HTTP_STATUS_CODES, IdResponse, newCreateUserRequest, RESPONSE_TYPES } from '@/dtos'
import { getErrorResponse } from '@/helpers/errors'

export async function createUser(req: Request, res: Response) {
  try {
    const request = newCreateUserRequest(req)

    const createdAt = new Date()
    const user = new User()
    user.role = request.role
    user.age = request.age
    user.name = request.name
    user.createdAt = createdAt

    const id = (await AppDataSource.manager.save(user)).id

    res.status(HTTP_STATUS_CODES.CREATED).send(IdResponse(id, RESPONSE_TYPES.USERS))
  } catch (error) {
    res.status(error.status ?? HTTP_STATUS_CODES.INTERNAL_ERROR).send(getErrorResponse(error))
  }
}
