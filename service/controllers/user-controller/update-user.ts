import { AppDataSource } from '@data'
import { User } from '@data/entity'
import { Request, Response } from 'express'

import { HTTP_STATUS_CODES, UpdateUserRequest } from '@/dtos'
import { BadRequestError, getErrorResponse } from '@/helpers/errors'

export async function updateUserById(req: Request, res: Response) {
  try {
    const request = new UpdateUserRequest(req)
    request.validateRequest
    const user = await AppDataSource.manager.findOne(User, {
      where: { id: Number(request.id) },
    })
    if (!user) {
      throw new BadRequestError('user not found')
    }
    await AppDataSource.manager.update(User, { id: request.id }, request.attributes)
    res.status(HTTP_STATUS_CODES.NO_CONTENT).end()
  } catch (error) {
    res.status(error.status ?? HTTP_STATUS_CODES.INTERNAL_ERROR).send(getErrorResponse(error))
  }
}
