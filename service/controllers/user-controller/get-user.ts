import { AppDataSource, User } from '@data'
import { Request, Response } from 'express'

import { HTTP_STATUS_CODES, ByIdRequest, validateRequest, RESPONSE_TYPES, newRequest } from '@/dtos'
import { BadRequestError, getErrorResponse, buildJsonApiResponse, NotFoundError } from '@/helpers'

export async function getUserById(req: Request, res: Response) {
  try {
    const request = new ByIdRequest(req)
    await validateRequest(request)

    const user = await AppDataSource.manager.findOne(User, {
      where: { id: request.id },
    })
    if (!user) {
      throw new NotFoundError({ detail: 'user not found' })
    }
    res.status(HTTP_STATUS_CODES.OK).send(buildJsonApiResponse(user, RESPONSE_TYPES.USERS))
  } catch (error) {
    res.status(error.status ?? HTTP_STATUS_CODES.INTERNAL_ERROR).send(getErrorResponse(error))
    return
  }
}
