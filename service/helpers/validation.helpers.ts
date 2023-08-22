import { validate, ValidationError } from 'class-validator'

import { BadRequestError } from '@/helpers'

type FormattedError = {
  message: string
  details: string
}

export async function validateRequest(classToValidate: object) {
  const errors = await validate(classToValidate)

  if (!errors.length) return

  const [formattedError] = formatValidationErrors(errors)

  throw new BadRequestError({
    detail: `Failed to parse request: ${formattedError.message}: ${formattedError.details}`,
  })
}

const formatValidationErrors = (errorsList: ValidationError[]) => {
  const errors: FormattedError[] = []

  errorsList.forEach(error => {
    errors.push({
      message: `${error.property} not passed the validation`,
      details: `'${error.value}' isn't valid value. ${Object.values(error.constraints).join(' ')}`,
    })
  })

  return errors
}
