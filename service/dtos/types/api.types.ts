import { PAGE_ORDER } from '@/dtos'

export type Links = {
  first?: string
  previous?: string
  self?: string
  next?: string
  last?: string
}

export type PageOpts = {
  limit: number
  number: number
  order: PAGE_ORDER
}
