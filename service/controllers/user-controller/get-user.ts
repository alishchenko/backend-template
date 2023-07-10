import { AppDataSource, User } from '@data'
import { Request, Response } from 'express'

import { HTTP_STATUS_CODES, UserByIdRequest, UserToResponse, validateRequest } from '@/dtos'
import { BadRequestError, getErrorResponse } from '@/helpers/errors'

export async function getUserById(req: Request, res: Response) {
  try {
    const request = new UserByIdRequest(req)
    validateRequest(request)

    const user = await AppDataSource.manager.findOne(User, {
      where: { id: request.id },
    })
    if (!user) {
      throw new BadRequestError({ detail: 'user not found' })
    }
    res.status(HTTP_STATUS_CODES.OK).send(UserToResponse(user))
  } catch (error) {
    res.status(error.status ?? HTTP_STATUS_CODES.INTERNAL_ERROR).send(getErrorResponse(error))
    return
  }
}
