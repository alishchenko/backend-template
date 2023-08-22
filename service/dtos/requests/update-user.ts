import { plainToClass, ClassConstructor, } from 'class-transformer'
import { IsBoolean, IsNumber, IsOptional, IsString, Min, validate } from 'class-validator'
import { Request } from 'express'

import { ByIdRequest } from '@/dtos'
import { BadRequestError } from '@/helpers/errors'

export class UpdateUserRequest extends ByIdRequest{
  @IsNumber()
  id: number

  @IsString()
  @IsOptional()
  name: string

  @IsNumber()
  @Min(14)
  @IsOptional()
  age?: number

  @IsBoolean()
  @IsOptional()
  role?: boolean
}


// TODO: every request forming with thhis func. The problem now os that in create we do not need id, in get dont need attributes and in update we need both.
// For galaxis we just remove everything except name and service is done
export async function newRequest<T>(cls: new (...args: any[]) => T, req: Request): Promise<T> {
  if ((req.method == "POST" || req.method == "PATCH")  && (!req.body.data || !req.body.data.attributes)) {
    throw new BadRequestError({ detail: 'Not JSON API request' });
  }

  const request = plainToClass(cls, {
    id: req.params.id,
    ...req.body.data.attributes,
  });

  console.log(request);
  
  await validateRequest(request as object);

  return request;
}

export async function validateRequest(object: object) {
  const errors = await validate(object)

  if (!errors.length) return
  console.log(errors[0]);
  

  throw new BadRequestError({ detail: 'failed to parse request' })
}
