import { Request } from 'express'
import { Expose, Type, plainToClass } from 'class-transformer'

import { User } from '@data/entity'
import {
  ListUsersRequest,
  JsonApiResponse,
  getLinks,
  Links,
  RESPONSE_TYPES,
} from '@/dtos'

class UserResponseAttributes {
  @Expose()
  name: string

  @Expose()
  age: number

  @Expose()
  role: boolean

  @Expose()
  createdAt: Date
}

class UserResponseDTO extends JsonApiResponse {
  @Type(() => UserResponseAttributes)
  attributes: UserResponseAttributes
}

type GetUserResponse = {
  data: UserResponseDTO
}

type GetUserListResponse = {
  data: UserResponseDTO[]
  links: Links
}

export function UserToResource(user: User): UserResponseDTO {
  const response = plainToClass(
    UserResponseDTO,
    {
      id: user.id,
      type: RESPONSE_TYPES.USERS,
      attributes: user,
    },
    { excludeExtraneousValues: true },
  )
  return response
}

export function UserToResponse(user: User): GetUserResponse {
  return { data: UserToResource(user) }
}

export function UserListToResponse(
  req: Request,
  request: ListUsersRequest,
  users: User[],
): GetUserListResponse {
  return {
    data: users.map(user => UserToResource(user)),
    links: getLinks(req.originalUrl, request.page),
  }
}
