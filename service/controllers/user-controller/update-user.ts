import { AppDataSource, User } from '@data'
import { Request, Response } from 'express'

import { HTTP_STATUS_CODES, newUpdateUserRequest } from '@/dtos'
import { BadRequestError, getErrorResponse } from '@/helpers/errors'

export async function updateUserById(req: Request, res: Response) {
  try {
    const request = newUpdateUserRequest(req)
    const user = await AppDataSource.manager.findOne(User, {
      where: { id: Number(request.id) },
    })

    if (!user) {
      throw new BadRequestError({ detail: 'user not found' })
    }
    await AppDataSource.manager.save(User, request)
    res.status(HTTP_STATUS_CODES.NO_CONTENT).end()
  } catch (error) {
    res.status(error.status ?? HTTP_STATUS_CODES.INTERNAL_ERROR).send(getErrorResponse(error))
  }
}
