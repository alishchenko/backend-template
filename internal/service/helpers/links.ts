import { Request } from 'express'

import { Links } from '@/types'

export function getLinks(
  req: Request,
  pageNumber: number,
  pageLimit: number,
  pageOrder: string,
): Links {
  const link =
    req.originalUrl + `&page[limit]=${pageLimit}&page[order]=${pageOrder}`
  return {
    first: link + '&page[number]=0',
    previous:
      pageNumber - 1 >= 0 ? link + `&page[number]=${pageNumber - 1}` : '',
    self: link + `&page[number]=${pageNumber}`,
    next: link + `&page[number]=${pageNumber + 1}`,
  }
}
