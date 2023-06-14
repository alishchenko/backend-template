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
    // TODO: if you not sure that object field exists you can instead of
    // ternar operator use this
    // error.status ?? HTTP_STATUS_CODES.INTERNAL_ERROR - checks for undefined
    // or this
    // error.status || HTTP_STATUS_CODES.INTERNAL_ERROR -  convert to boolean
    // and checks if true
    res
      .status(error.status ? error.status : HTTP_STATUS_CODES.INTERNAL_ERROR)
      .send(getErrorResponse(error))
  }
}
