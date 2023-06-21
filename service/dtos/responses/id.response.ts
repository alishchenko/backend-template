import { plainToClass } from 'class-transformer'

import { JsonApiResponse } from '@/dtos'

export function IdResponse(id: number, type: string): any {
  return {
    data: plainToClass(
      JsonApiResponse,
      {
        id: id.toString(),
        type,
      },
      { excludeExtraneousValues: true },
    ),
  }
}
