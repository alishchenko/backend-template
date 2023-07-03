import { readFileSync } from 'fs'
import * as yaml from 'js-yaml'
import { join } from 'path'

import { createLogger } from '@/helpers'

import { Config } from './config'
import { validationSchema } from './validation-schema.config'

export const loadConfiguration = (): Config => {
  return yaml.load(
    readFileSync(join(process.env.CONFIG_FILE || 'config.yaml'), 'utf8'),
  ) as Config
}

export function getConfig(): Config {
  const config = loadConfiguration()
  const { error, value: validatedConfig } = validationSchema.validate(config)
  if (error) {
    const logger = createLogger()
    logger.error(
      `Config validation error: ${error.message}`,
      null,
      'Config validation',
    )
    throw new Error(`Config validation error: ${error.message}`)
  }
  return validatedConfig
}
