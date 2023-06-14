import { Request, Response } from 'express'

import { UserQ } from '@data'
import { db, createListResponse } from '@/helpers'
import { newListUsersRequest } from '@/requests'
import { UserTypeEnum, GetUsersListRequest } from '@resources'

export async function listUsers(req: Request, res: Response) {
  const request = newListUsersRequest(req)
  const users = await applyfilterUserParams(request).select()
  const userResources = createListResponse(
    users,
    UserTypeEnum.Users,
    req,
    request.pageNumber,
    request.pageLimit,
    request.pageOrder,
  )

  res.status(200).send(userResources)
}
function applyfilterUserParams(params: GetUsersListRequest): UserQ {
  const query = db.users().new()

  if (!params) return query

  if (params.filterName) {
    query.filterByName(params.filterName)
  }
  if (params.filterAge) {
    query.filterByAge(params.filterAge)
  }
  if (params.filterRole) {
    query.filterByRole(params.filterRole)
  }
  query.page({
    pageLimit: params.pageLimit,
    pageNumber: params.pageNumber,
    pageOrder: params.pageOrder,
  })

  return query
}
