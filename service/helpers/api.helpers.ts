import { Request } from 'express'

import { Links, PAGE_ORDER, PageOpts } from '@/dtos'
import { BadRequestError } from '@/helpers'

type JsonApiRecordBase<T extends string> = {
  id: string | number
  type: T
}

type JsonApiAttributes<T extends object> = {
  attributes: T
}

type JsonApiResponse<Type extends string, TData extends object> = {
  data: JsonApiRecordBase<Type> & JsonApiAttributes<TData>
}

type JsonApiListResponse<Type extends string, TData extends object> = {
  data: (JsonApiRecordBase<Type> & JsonApiAttributes<TData>)[]
  links: Links
}

const setLink = (searchParams: URLSearchParams, pageNumber: number): string => {
  searchParams.set('page[number]', pageNumber.toString())

  return searchParams.toString()
}

export function buildJsonApiLinks(
  originalUrl: string,
  page: {
    limit: number
    number: number
    order: PAGE_ORDER
  },
): Links {
  // Create a URL object with the link
  const url = new URL(originalUrl, 'http://example.com')

  // Get the search parameters from the URL
  const searchParams = new URLSearchParams(url.search)
  const urlPathname = `${url.pathname}?`

  searchParams.set('page[limit]', page.limit.toString())
  searchParams.set('page[order]', page.order)
  searchParams.set('page[number]', '0')

  return {
    first: urlPathname + setLink(searchParams, 0),
    previous: page.number - 1 >= 0 ? urlPathname + setLink(searchParams, page.number - 1) : '',
    self: urlPathname + setLink(searchParams, page.number),
    next: urlPathname + setLink(searchParams, page.number + 1),
  }
}

/**
 * Parses filters from the given query parameters.
 *
 * @param  params - The query parameters from the request.
 * @param  isTypeKey - The type guard function that checks if the key is a valid key of T.
 * @throws BadRequestError - When an unsupported key is encountered in the query parameters.
 * @returns The parsed filtered object of generic type T.
 */

export function parseFilters<T extends object>(
  params: Request['query'],
  isTypeKey: (key: string) => key is string & keyof T,
): T {
  const filterParams = params.filter as typeof params

  const parsedFilters = {} as T

  if (!filterParams) return parsedFilters

  Object.entries(filterParams).forEach(([key, value]) => {
    if (!isTypeKey(key)) throw new BadRequestError({ detail: `filter[${key}] is unsupported` })

    parsedFilters[key] =
      value instanceof Array ? (value as T[string & keyof T]) : ([value] as T[string & keyof T])
  })

  return parsedFilters
}

export function parsePageOpts(params: Request['query']): PageOpts {
  const pageOpts = {} as PageOpts

  const pageParams = params.page as typeof params

  if (!pageParams) return pageOpts

  if (pageParams.number) pageOpts.number = Number(pageParams.number)
  if (pageParams.limit) pageOpts.limit = Number(pageParams.limit)
  if (pageParams.order) pageOpts.order = pageParams.order as PAGE_ORDER

  return pageOpts
}

export function buildJsonApiResponse<Type extends string, TData extends { id: string | number }>(
  data: TData,
  type: Type,
): JsonApiResponse<Type, TData> {
  const { id, ...attributes } = data

  return {
    data: {
      id,
      type,
      attributes: attributes as TData,
    },
  }
}

export function buildJsonApiListResponse<
  Type extends string,
  TData extends { id: string | number },
>(
  data: TData[],
  type: Type,
  originalUrl: string,
  pageOpts: PageOpts,
): JsonApiListResponse<Type, TData> {
  const dataEntries: (JsonApiRecordBase<Type> & JsonApiAttributes<TData>)[] = []

  data.forEach(entry => {
    const { id, ...attributes } = entry
    const body = {
      id,
      type,
      attributes: attributes as TData,
    }

    dataEntries.push(body)
  })

  return {
    data: dataEntries,
    links: buildJsonApiLinks(originalUrl, pageOpts),
  }
}
