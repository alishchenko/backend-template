require("dotenv").config();

import {Run} from './internal/service';

const myArgs = process.argv.slice(2);

async function main() {
    if (myArgs[0] === 'run' && myArgs[1] === 'service') {
        try {            
            Run()
        } catch (error: any) {
            console.error('Error occured:', error.message as string);
            console.log('Trying to restart...');
            setTimeout(() => {
                Run()
            }, 5000)
            
        }
    }
}

main();