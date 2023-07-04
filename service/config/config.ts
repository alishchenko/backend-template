import { LogLevel, NodeEnv } from '@/dtos'

export type Config = {
  nodeEnv: NodeEnv
  app: {
    name: string
    host: string
    port: number
  }
  db: {
    url: string
  }
  log: {
    level: LogLevel
  }
}
