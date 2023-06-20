import { Request } from 'express'
import { validate, IsNumber } from 'class-validator'

import { BadRequestError } from '@/helpers/errors'

export class UpdateUserRequest {
  @IsNumber()
  id: number
  attributes: {
    name: string

    age: number

    role: boolean
  }

  constructor(req: Request) {
    this.id = Number(req.params.id)
    this.attributes = {
      name: req.body.data.attributes.name,
      age: req.body.data.attributes.age,
      role: req.body.data.attributes.role,
    }
  }
  async validateRequest() {
    const errors = await validate(this)

    if (!errors.length) return

    throw new BadRequestError(
      'failed to parse update request: ' + errors[0].toString(),
    )
  }
}
