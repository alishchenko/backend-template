import { Request } from 'express'

import { getLinks } from '@/helpers'

type Resource = {
  id: string
  type: string
  attributes: any
}

function convertDataToResource(
  obj: Record<string, unknown>,
  type: string,
): Resource {
  const { id, ...attributes } = obj

  return {
    id: typeof id == 'string' ? id : id.toString(),
    type,
    attributes,
  }
}

export function createResponse(
  obj: Record<string, unknown>,
  type: string,
): any {
  const resp = convertDataToResource(obj, type)
  return {
    data: { ...resp },
  }
}

export function createListResponse(
  obj: Record<string, unknown>[],
  type: string,
  req: Request,
  pageNumber: number,
  pageLimit: number,
  pageOrder: string,
): any {
  return {
    data: obj.map(el => convertDataToResource(el, type)),
    links: getLinks(req, pageNumber, pageLimit, pageOrder),
  }
}
