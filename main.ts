import 'module-alias/register'
import 'reflect-metadata'

import { run } from '@'
import { logger } from '@'

const myArgs = process.argv.slice(2)

async function main() {
  if (myArgs[0] === 'run' && myArgs[1] === 'service') {
    try {
      run()
    } catch (error) {
      logger.error('Error occured:', error.message as string)
    }
  }
}

main()
