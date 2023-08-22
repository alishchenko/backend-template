import {
  FindManyOptions,
  FindOptionsOrder,
  FindOptionsWhere,
  FindOptionsWhereProperty,
  In,
} from 'typeorm'

import { PageOpts } from '@/dtos'

type TypedFilter<T> = {
  [K in keyof T]?: Array<T[K]>
}

type FindOptionsWhereValue<T> = string & keyof T extends 'toString'
  ? unknown
  : FindOptionsWhereProperty<NonNullable<T[string & keyof T]>, NonNullable<T[string & keyof T]>>

/**
 * Builds FindManyOptions for TypeORM based on the provided parameters.
 * Filter's names should be the same as enteties fiedls
 *
 * @param  params - An object containing filter, page, and orderBy options.
 * @param  params.filter - An object containing filtering criteria based on entity properties.
 * @param  params.page - An object representing pagination options (e.g., number of items per page and page number).
 * @param  params.orderBy - The property of the entity by which to order the results.
 * @returns  - The FindManyOptions object to be used with TypeORM's findMany method.
 *
 * @example
 * buildOrmFindOpts<OrmEntity>({ ...filters, orderBy: 'id' })
 */

export function buildOrmFindOpts<T extends object>(params: {
  filter: TypedFilter<T>
  page: PageOpts
  orderBy: keyof T
}): FindManyOptions<T> {
  const whereParams: FindOptionsWhere<T> = {}
  const queryOpts: FindManyOptions<T> = {
    skip: params.page.number * params.page.limit,
    take: params.page.limit,
    order: { [params.orderBy]: params.page.order } as FindOptionsOrder<T>,
  }

  Object.entries<unknown[]>(params.filter).forEach(([key, value]) => {
    if (value.length) {
      whereParams[key as keyof T] = In(value) as FindOptionsWhereValue<T>
    }
  })

  queryOpts.where = whereParams

  return queryOpts
}
