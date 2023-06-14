import { Request, Response } from 'express'

import { db } from '@/helpers'
import { newUserByIdRequest } from '@/requests'
import { getErrorResponse } from '@/helpers/errors'
import { HTTP_STATUS_CODES } from '@/enums'

export async function deleteUserById(req: Request, res: Response) {
  try {
    const id = newUserByIdRequest(req)
    await db.users().new().filterByID([id]).delete()
    res.sendStatus(HTTP_STATUS_CODES.NO_CONTENT)
  } catch (error) {
    res
      .status(error.status ?? HTTP_STATUS_CODES.INTERNAL_ERROR)
      .send(getErrorResponse(error))
  }
}
