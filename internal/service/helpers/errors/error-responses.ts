import { HTTP_STATUS_CODES } from '@/enums'
import { RequestError } from '@/helpers/errors'

type ErrorResponse = {
  errors: {
    title: string
    status: HTTP_STATUS_CODES
    detail?: string
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
        },
      }
    case HTTP_STATUS_CODES.BAD_REQUEST:
      return {
        errors: {
          title: 'Bad request',
          status: error.status,
          detail: error.message,
        },
      }
    case HTTP_STATUS_CODES.NOT_FOUND:
      return {
        errors: {
          title: 'Not found',
          status: error.status,
          detail: error.message,
        },
      }
    case HTTP_STATUS_CODES.INTERNAL_ERROR:
    default:
      return {
        errors: {
          title: 'Internal server error',
          status: HTTP_STATUS_CODES.INTERNAL_ERROR,
          detail: error.message,
        },
      }
  }
}
