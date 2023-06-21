import { Request, Response } from 'express'

import { AppDataSource } from '@data'
import { User } from '@data/entity'
import { UserToResponse, UserByIdRequest, HTTP_STATUS_CODES } from '@/dtos'
import { BadRequestError, getErrorResponse } from '@/helpers/errors'

export async function getUserById(req: Request, res: Response) {
  try {
    const request = new UserByIdRequest(req)
    request.validateRequest

    const user = await AppDataSource.manager.findOne(User, {
      where: { id: request.id },
    })
    if (!user) {
      throw new BadRequestError('user not found')
    }
    res.status(HTTP_STATUS_CODES.OK).send(UserToResponse(user))
  } catch (error) {
    res
      .status(error.status ?? HTTP_STATUS_CODES.INTERNAL_ERROR)
      .send(getErrorResponse(error))
    return
  }
}
