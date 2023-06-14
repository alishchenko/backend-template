import { Request, Response } from 'express'

import { db } from '@/helpers'
import { newUpdateUserRequest } from '@/requests/update-user'
import { getErrorResponse } from '@/helpers/errors'
import { HTTP_STATUS_CODES } from '@/enums'

export async function updateUserById(req: Request, res: Response) {
  try {
    const request = newUpdateUserRequest(req)

    await db.users().new().update(
      {
        name: request.attributes.name,
        age: request.attributes.age,
        role: request.attributes.role,
      },
      Number(request.id),
    )
    res.status(HTTP_STATUS_CODES.NO_CONTENT).end()
  } catch (error) {
    res
      .status(error.status ? error.status : HTTP_STATUS_CODES.INTERNAL_ERROR)
      .send(getErrorResponse(error))
  }
}
