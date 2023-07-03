import { IsBoolean, IsNumber, IsString, Min, validate } from 'class-validator'
import { Request } from 'express'

import { BadRequestError } from '@/helpers/errors'

export class CreateUserRequest {
  @IsString()
  name: string

  @IsNumber()
  @Min(14)
  age: number

  @IsBoolean()
  role: boolean

  constructor(req: Request) {
    this.name = req.body.data.attributes.name
    this.age = req.body.data.attributes.age
    this.role = req.body.data.attributes.role
  }
  async validateRequest() {
    const errors = await validate(this)

    if (!errors.length) return

    throw new BadRequestError('failed to parse create request: ' + errors[0].toString())
  }
}
