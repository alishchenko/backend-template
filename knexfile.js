require('dotenv').config();

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'postgresql',
    connection: process.env.DB_URL,
    migrations: {
      directory: './internal/assets/migrations',
    },
    pool: {
      min: 2,
      max: 10
    },
  }

};
