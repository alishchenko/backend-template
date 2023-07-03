import 'module-alias/register'
import 'reflect-metadata'

import { run } from '@'
import { createLogger } from '@/helpers'

const myArgs = process.argv.slice(2)

async function main() {
  if (myArgs[0] === 'run' && myArgs[1] === 'service') {
    try {
      run()
    } catch (error) {
      const logger = createLogger()
      logger.error('Error occured:', error.message as string)
      logger.info('Trying to restart...')
      setTimeout(() => {
        run()
      }, 5000)
    }
  }
}

main()
