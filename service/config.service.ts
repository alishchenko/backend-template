import dotenv from 'dotenv'
import joi from 'joi'

import { createLogger } from '@/helpers'
dotenv.config()

type ProcessEnv = {
  [key: string]: string | undefined
}

type Config = {
  HOST: string | undefined
  PORT: number | undefined
  LEVEL_INFO: string | undefined
  DB_URL: string | undefined
  DEFAULT_PAGE_LIMIT: number
}

const processEnv: ProcessEnv = {
  HOST: process.env.HOST,
  PORT: process.env.PORT,
  LEVEL_INFO: process.env.LEVEL_INFO,
  DB_URL: process.env.DB_URL,
}

const schema = joi.object({
  LEVEL_INFO: joi.string().empty().default('info'),
  HOST: joi.string().empty().default('localhost'),
  PORT: joi.number().default(8000),
  DB_URL: joi.string().required(),
  DEFAULT_PAGE_LIMIT: joi.number().default(15),
})

const configValidate = schema.validate(processEnv)

const config: Config = configValidate.value

const logger = createLogger()
if (configValidate.error) throw configValidate.error.details
if (configValidate.warning) logger.info(configValidate.error)
export { config }
