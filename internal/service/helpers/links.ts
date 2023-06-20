import { GetUsersListPageOrderEnum, Links } from '@resources'

export function getLinks(
  originalUrl: string,
  page: {
    limit: number
    number: number
    order: GetUsersListPageOrderEnum
  },
): Links {
  // Create a URL object with the link
  const url = new URL(originalUrl, 'http://example.com')

  // Get the search parameters from the URL
  const searchParams = new URLSearchParams(url.search)

  searchParams.set('page[limit]', page.limit.toString())
  searchParams.set('page[order]', page.order)
  searchParams.set('page[number]', '0')

  return {
    first: url.pathname + setLink(searchParams, 0),
    previous:
      page.number - 1 >= 0
        ? url.pathname + setLink(searchParams, page.number - 1)
        : '',
    self: url.pathname + setLink(searchParams, page.number),
    next: url.pathname + setLink(searchParams, page.number + 1),
  }
}

function setLink(searchParams: URLSearchParams, pageNumber: number): string {
  searchParams.set('page[number]', pageNumber.toString())
  return searchParams.toString()
}
