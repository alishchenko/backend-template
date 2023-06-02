import winston from 'winston';
import config from '../../../config';
export const logger = winston.createLogger({
  level: config.LEVEL_INFO ? config.LEVEL_INFO : 'info', // Set the desired log level
  format: winston.format.json(), // Use JSON format for logs
  transports: [
    new winston.transports.Console(), // Output logs to the console
  ],
});