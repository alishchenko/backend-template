import { Request } from 'express'
import { GetUsersListRequest, GetUsersListPageOrderEnum } from '@resources'
import { config } from '@/config'

export function newListUsersRequest(req: Request): GetUsersListRequest {
  const params = req.query

  const request: GetUsersListRequest = {
    pageLimit: config.DEFAULT_PAGE_LIMIT,
    pageNumber: 0,
    pageOrder: 'desc',
  }

  const pageParams = params.page as typeof params
  const filterParams = params.filter as typeof params

  if (params.page) {
    if (pageParams.pageNumber) request.pageNumber = Number(pageParams.number)
    if (pageParams.pageLimit) request.pageLimit = Number(pageParams.limit)
    if (pageParams.pageOrder) pageParams.order as GetUsersListPageOrderEnum
  }

  if (!filterParams) return
  if (filterParams.name) {
    request.filterName =
      filterParams.name instanceof Array
        ? (filterParams.name as string[])
        : [filterParams.name as string]
  }
  if (filterParams.age) {
    request.filterAge = [
      ...(filterParams.age instanceof Array
        ? filterParams.age.map(Number)
        : [Number(filterParams.age)]),
    ]
  }
  if (filterParams.role) {
    request.filterRole = [
      ...(filterParams.role instanceof Array
        ? filterParams.role.map(Boolean)
        : [Boolean(filterParams.role)]),
    ]
  }

  return request
}
