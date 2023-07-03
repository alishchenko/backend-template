import * as joi from 'joi'

import { NodeEnv } from '@/dtos'

import { Config } from './config'

const logFileRE = /[a-zA-Z1-9_.]\.log/

export const validationSchema = joi.object<Config>({
  nodeEnv: joi
    .string()
    .equal(...Object.values(NodeEnv))
    .default(NodeEnv.Development),
  app: {
    name: joi.string().required(),
    host: joi.string().allow('').required(),
    port: joi.number().default(3000).required(),
    globalPrefix: joi.string().default('v1'),
  },
  db: {
    url: joi.string().required(),
  },
  log: {
    errorFile: joi.string().optional().allow('').pattern(logFileRE),
    combinedFile: joi.string().optional().pattern(logFileRE),
    level: joi.string().equal('debug', 'info').default('info'),
    inJson: joi.boolean().equal(true, false).default(false),
  },
})
