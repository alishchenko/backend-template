import { DB } from '@data/postgress/db'

const db = new DB()

// TODO: whats a point of wrapping db to object? you can just
// export const db = new DB()
export { db }
