import { Request, Response } from 'express'
import { RequestError, getErrorResponse } from '@/helpers/errors'
import { db, createResource } from '@/helpers'
import { HTTP_STATUS_CODES } from '@/enums'
import { newUserById } from '@/requests'
import { UserTypeEnum } from '@resources'

export async function getUserById(req: Request, res: Response) {
  try {
    const id = newUserById(req)

    const user = await db.users().new().filterByID([id]).get()
    if (typeof user === 'undefined') {
      throw new RequestError('user not found', HTTP_STATUS_CODES.NOT_FOUND)
    }
    res
      .status(HTTP_STATUS_CODES.OK)
      .send(createResource({ type: UserTypeEnum.Users, ...user }))
  } catch (error) {
    res
      .status(error.status ? error.status : HTTP_STATUS_CODES.INTERNAL_ERROR)
      .send(getErrorResponse(error))
    return
  }
}
