import { Request, Response } from 'express'
import { In, FindOptionsWhere } from 'typeorm'

import { AppDataSource } from '@data'
import { User } from '@data/entity'
import { UserListToResponse, ListUsersRequest } from '@/dtos'

export async function listUsers(req: Request, res: Response) {
  const request = new ListUsersRequest(req)
  request.validateRequest()

  const users = await getUsers(request)

  const userResources = UserListToResponse(req, request, users)

  res.status(200).send(userResources)
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
