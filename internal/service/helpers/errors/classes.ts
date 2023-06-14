import { HTTP_STATUS_CODES } from '@/enums'

export class RequestError extends Error {
  status: HTTP_STATUS_CODES

  constructor(errorMessage = '', status: HTTP_STATUS_CODES) {
    super(errorMessage)
    this.status = status
  }
}

export class BadRequestError extends RequestError {
  status: HTTP_STATUS_CODES

  constructor(errorMessage = '') {
    super(errorMessage, HTTP_STATUS_CODES.BAD_REQUEST)
  }
}
export class InternalError extends RequestError {
  status: HTTP_STATUS_CODES

  constructor(errorMessage = '') {
    super(errorMessage, HTTP_STATUS_CODES.INTERNAL_ERROR)
  }
}

export class UnauthorizedError extends RequestError {
  status: HTTP_STATUS_CODES

  constructor(errorMessage = '') {
    super(errorMessage, HTTP_STATUS_CODES.UNAUTHORIZED)
  }
}
export class NotFoundError extends RequestError {
  status: HTTP_STATUS_CODES

  constructor(errorMessage = '') {
    super(errorMessage, HTTP_STATUS_CODES.NOT_FOUND)
  }
}
