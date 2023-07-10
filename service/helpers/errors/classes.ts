import { HTTP_STATUS_CODES } from '@/dtos'

type ErrorProperties = {
  id?: string
  detail?: string
  code?: string
  meta?: { [key: string]: unknown }
}

export class RequestError extends Error {
  id?: string
  status: HTTP_STATUS_CODES
  detail?: string
  code?: string
  meta?: { [key: string]: unknown }

  constructor(error: ErrorProperties, status: HTTP_STATUS_CODES) {
    super(error.detail)
    this.id = error.id
    this.status = status
    this.code = error.code
    this.meta = error.meta
  }
}

export class BadRequestError extends RequestError {
  status: HTTP_STATUS_CODES

  constructor(error: ErrorProperties) {
    super(error, HTTP_STATUS_CODES.BAD_REQUEST)
  }
}
export class InternalError extends RequestError {
  status: HTTP_STATUS_CODES

  constructor(error: ErrorProperties) {
    super(error, HTTP_STATUS_CODES.INTERNAL_ERROR)
  }
}

export class UnauthorizedError extends RequestError {
  status: HTTP_STATUS_CODES

  constructor(error: ErrorProperties) {
    super(error, HTTP_STATUS_CODES.UNAUTHORIZED)
  }
}
export class NotFoundError extends RequestError {
  status: HTTP_STATUS_CODES

  constructor(error: ErrorProperties) {
    super(error, HTTP_STATUS_CODES.NOT_FOUND)
  }
}
