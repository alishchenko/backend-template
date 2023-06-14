import { Request } from 'express'
import { GetUsersListRequest, GetUsersListPageOrderEnum } from '@resources'
import { config } from '@/config'

// TODO check return types of the functions
export function newListUsersRequest(req: Request): GetUsersListRequest {
  const params = req.query

  if (!params) return

  let request: GetUsersListRequest

  const pageParams = params.page as typeof params
  const filterParams = params.filter as typeof params

  if (params.page) {
    request.pageLimit = pageParams.limit
      ? Number(pageParams.limit)
      : config.DEFAULT_PAGE_LIMIT
    request.pageNumber = Number(pageParams.number)
      ? Number(pageParams.number)
      : 0
    request.pageOrder = pageParams.order
      ? (pageParams.order as GetUsersListPageOrderEnum)
      : 'desc'
  }

  if (!filterParams) return

  if (filterParams.name) {
    request.filterName = [
      ...(filterParams.name instanceof Array
        ? (filterParams.name as string[])
        : [filterParams.name as string]),
    ]
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

  return params
}
