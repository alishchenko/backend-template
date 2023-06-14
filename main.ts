import 'module-alias/register'

import { logger } from '@/helpers'
import { run } from '@'

const myArgs = process.argv.slice(2)

async function main() {
  if (myArgs[0] === 'run' && myArgs[1] === 'service') {
    try {
      run()
    } catch (error) {
      logger.error('Error occured:', error.message as string)
      logger.info('Trying to restart...')
      setTimeout(() => {
        run()
      }, 5000)
    }
  }
}

main()
