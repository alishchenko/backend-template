import { Request, Response } from 'express'
import { RequestError, getErrorResponse } from '@/helpers/errors'
import { db, createResponse } from '@/helpers'
import { HTTP_STATUS_CODES } from '@/enums'
import { newUserByIdRequest } from '@/requests'
import { UserTypeEnum } from '@resources'

export async function getUserById(req: Request, res: Response) {
  try {
    const id = newUserByIdRequest(req)

    const user = await db.users().new().filterByID([id]).get()
    if (typeof user === 'undefined') {
      throw new RequestError('user not found', HTTP_STATUS_CODES.NOT_FOUND)
    }
    res
      .status(HTTP_STATUS_CODES.OK)
      .send(createResponse(user, UserTypeEnum.Users))
  } catch (error) {
    res
      .status(error.status ?? HTTP_STATUS_CODES.INTERNAL_ERROR)
      .send(getErrorResponse(error))
    return
  }
}
