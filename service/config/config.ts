import { LogLevel, NodeEnv } from '@/dtos'

export type Config = {
  nodeEnv: NodeEnv
  app: {
    name: string
    host: string
    port: number
    globalPrefix: string
  }
  db: {
    url: string
  }
  redis: {
    host: string
    port: number
    auth: string
    ttl: number
  }
  log: {
    errorFile: string
    combinedFile: string
    level: LogLevel
    inJson: boolean
  }
  sentry: {
    dsn: string
    sampleRate: number
  }
  http: {
    timeout: number
    maxRedirects: number
  }
}
