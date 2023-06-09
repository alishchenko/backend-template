import { HTTP_STATUS_CODES } from '@/dtos'
import { RequestError } from '@/helpers/errors'

type ErrorResponse = {
  errors: {
    id?: string
    title: string
    status: HTTP_STATUS_CODES
    detail?: string
    code?: string
    meta?: { [key: string]: unknown }
  }
}

export function getErrorResponse(error: RequestError): ErrorResponse {
  switch (error.status) {
    case HTTP_STATUS_CODES.UNAUTHORIZED:
      return {
        errors: {
          title: 'Bad auth credentials provided',
          status: error.status,
          detail: error.message,
          id: error.id,
          code: error.code,
          meta: error.meta,
        },
      }
    case HTTP_STATUS_CODES.BAD_REQUEST:
      return {
        errors: {
          title: 'Bad request',
          status: error.status,
          detail: error.message,
          id: error.id,
          code: error.code,
          meta: error.meta,
        },
      }
    case HTTP_STATUS_CODES.NOT_FOUND:
      return {
        errors: {
          title: 'Not found',
          status: error.status,
          detail: error.message,
          id: error.id,
          code: error.code,
          meta: error.meta,
        },
      }
    case HTTP_STATUS_CODES.INTERNAL_ERROR:
    default:
      return {
        errors: {
          title: 'Internal server error',
          status: HTTP_STATUS_CODES.INTERNAL_ERROR,
          detail: error.message,
          id: error.id,
          code: error.code,
          meta: error.meta,
        },
      }
  }
}
