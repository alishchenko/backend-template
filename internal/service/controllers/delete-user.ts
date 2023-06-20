import { Request, Response } from 'express'

import { AppDataSource } from '@data'
import { User } from '@data/entity'
import { UserByIdRequest, HTTP_STATUS_CODES } from '@/dtos'
import { BadRequestError, getErrorResponse } from '@/helpers/errors'

export async function deleteUserById(req: Request, res: Response) {
  try {
    const request = new UserByIdRequest(req)
    await request.validateRequest()

    const user = await AppDataSource.manager.findOne(User, {
      where: { id: request.id },
    })
    if (!user) {
      throw new BadRequestError('user not found')
    }
    await AppDataSource.manager.delete(User, { id: request.id })
    res.sendStatus(HTTP_STATUS_CODES.NO_CONTENT)
  } catch (error) {
    res
      .status(error.status ?? HTTP_STATUS_CODES.INTERNAL_ERROR)
      .send(getErrorResponse(error))
  }
}
