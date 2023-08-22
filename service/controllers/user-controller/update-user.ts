import { AppDataSource, User } from '@data'
import { Request, Response } from 'express'

import { HTTP_STATUS_CODES, newRequest, UpdateUserRequest } from '@/dtos'
import { BadRequestError, getErrorResponse } from '@/helpers/errors'

export async function updateUserById(req: Request, res: Response) {
  try {
    const request = await newRequest<UpdateUserRequest>(UpdateUserRequest, req)
    console.log(request)

    const user = await AppDataSource.manager.findOne(User, {
      where: { id: request.id },
    })

    if (!user) {
      throw new BadRequestError({ detail: 'user not found' })
    }

    await AppDataSource.manager.update(User, request.id, {
      name: request.name,
      age: request.age,
      role: request.role,
    })
    res.status(HTTP_STATUS_CODES.NO_CONTENT).end()
  } catch (error) {
    res.status(error.status ?? HTTP_STATUS_CODES.INTERNAL_ERROR).send(getErrorResponse(error))
  }
}
