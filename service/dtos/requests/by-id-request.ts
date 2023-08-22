import { IsNumber } from 'class-validator'
import { Request } from 'express'

export class ByIdRequest {
  @IsNumber()
  id: number

  constructor(req: Request) {
    this.id = Number(req.params.id)
  }
}
