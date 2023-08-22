import { AppDataSource, User } from '@data'
import { Request, Response } from 'express'
import { FindOptionsWhere, In } from 'typeorm'

import { ListUsersRequest, RESPONSE_TYPES, validateRequest } from '@/dtos'
import { buildJsonApiListResponse } from '@/helpers'

export async function listUsers(req: Request, res: Response) {
  const request = new ListUsersRequest(req)
  validateRequest(request)

  const users = await getUsers(request)

  res
    .status(200)
    .send(buildJsonApiListResponse(users, RESPONSE_TYPES.USERS, req.originalUrl, request.page))
}

function getUsers(params: ListUsersRequest): Promise<User[]> {
  if (!params) return AppDataSource.manager.find(User)

  const queryParams: FindOptionsWhere<User> = {}

  if (params.filter.name.length) {
    queryParams.name = In(params.filter.name)
  }
  if (params.filter.age.length) {
    queryParams.age = In(params.filter.age)
  }
  if (params.filter.role.length) {
    queryParams.role = In(params.filter.role)
  }

  const query = AppDataSource.manager.find(User, {
    where: queryParams,
    order: { id: params.page.order },
    skip: params.page.number * params.page.limit,
    take: params.page.limit,
  })

  return query
}
