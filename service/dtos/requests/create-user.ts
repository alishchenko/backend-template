import { IsBoolean, IsNumber, IsString, Min } from 'class-validator'

export class CreateUserRequest {
  @IsString()
  name: string

  @IsNumber()
  @Min(14)
  age: number

  @IsBoolean()
  role: boolean
}
