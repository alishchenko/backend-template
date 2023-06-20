import { Request } from 'express'

import { getLinks } from '@/helpers'
import { User } from '@data/entity'
import {
  User as userResponse,
  GetUsersList200Response,
  CreateUser201Response,
  UserTypeEnum,
} from '@resources'
import { ListUsersRequest } from '../requests/list-users'

export function UserToResource(user: User): userResponse {
  const response: userResponse = {
    id: user.id.toString(),
    type: UserTypeEnum.Users,
    attributes: {
      name: user.name,
      age: user.age,
      role: user.role,
      createdAt: user.created_at.toDateString(),
    },
  }
  return response
}

export function UserToResponse(user: User): CreateUser201Response {
  return { data: UserToResource(user) }
}

export function UserListToResponse(
  req: Request,
  request: ListUsersRequest,
  users: User[],
): GetUsersList200Response {
  return {
    data: users.map(user => UserToResource(user)),
    links: getLinks(req.originalUrl, request.page),
  }
}
