import { Request, Response } from 'express'

import { UserQ } from '@data'
import { db, createResource } from '@/helpers'
import { newListUsersRequest } from '@/requests'
import { UserTypeEnum } from '@resources'
import { ListUsersFilters } from '@/types'

export async function listUsers(req: Request, res: Response) {
  const request = newListUsersRequest(req)
  const users = await applyfilterUserParams(request).select()
  const userResources = users.map(user =>
    createResource({ type: UserTypeEnum.Users, ...user }),
  )
  res.status(200).send(userResources)
}

function applyfilterUserParams(params: ListUsersFilters): UserQ {
  const query = db.users().new()

  if (params) {
    if (params.id) {
      query.filterByID(params.id)
    }
    if (params.name) {
      query.filterByName(params.name)
    }
    if (params.age) {
      query.filterByAge(params.age)
    }
    if (params.role) {
      query.filterByRole(params.role)
    }
  }

  return query
}
