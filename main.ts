import dotenv from 'dotenv'
dotenv.config()
import { logger } from './internal/service/helpers/log'
import { Run } from './internal/service'

const myArgs = process.argv.slice(2)

async function main() {
  if (myArgs[0] === 'run' && myArgs[1] === 'service') {
    try {            
      Run()
    } catch (error) {
      logger.error('Error occured:', error.message as string)
      logger.info('Trying to restart...')
      setTimeout(() => {
        Run()
      }, 5000)
            
    }
  }
}

main()