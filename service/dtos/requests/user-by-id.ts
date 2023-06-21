import { Request } from 'express'
import { validate, IsNumber } from 'class-validator'

import { BadRequestError } from '@/helpers/errors'

export class UserByIdRequest {
  @IsNumber()
  id: number

  constructor(req: Request) {
    this.id = Number(req.params.id)
  }
  async validateRequest() {
    const errors = await validate(this)

    if (!errors.length) return

    throw new BadRequestError(
      'failed to parse update request: ' + errors[0].toString(),
    )
  }
}
