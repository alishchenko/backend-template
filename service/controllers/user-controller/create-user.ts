import { AppDataSource, User } from '@data'
import { Request, Response } from 'express'

import { HTTP_STATUS_CODES, newRequest, CreateUserRequest, RESPONSE_TYPES } from '@/dtos'
import { getErrorResponse, buildJsonApiResponse } from '@/helpers'

export async function createUser(req: Request, res: Response) {
  try {
    const request = await newRequest<CreateUserRequest>(CreateUserRequest, req)

    const createdAt = new Date()
    const user = new User()
    user.role = request.role
    user.age = request.age
    user.name = request.name
    user.createdAt = createdAt

    const dbResp = (await AppDataSource.manager.insert(User, user)).generatedMaps[0]
 
    res.status(HTTP_STATUS_CODES.CREATED).send(buildJsonApiResponse({ id: dbResp.id }, RESPONSE_TYPES.USERS))
  } catch (error) {
    res.status(error.status ?? HTTP_STATUS_CODES.INTERNAL_ERROR).send(getErrorResponse(error))
  }
}
