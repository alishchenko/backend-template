import { Expose } from 'class-transformer'

export class JsonApiResponse {
  @Expose()
  id: number

  @Expose()
  type: string

  @Expose()
  attributes: any
}
