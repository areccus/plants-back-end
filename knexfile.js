// const sharedConfig = {
//     client: 'sqlite3',
//     useNullAsDefault: true,
//     migrations: {
//       directory: './data/migrations',
//     },
//     seeds: {
//       directory: './data/seeds',
//     },
//     pool: {
//       afterCreate: (conn, done) => {
//         conn.run('PRAGMA foreign_keys = ON', done)
//       },
//     },
//   }
//   module.exports = {
//     development: {
//       ...sharedConfig,
//       connection: { filename: './data/plants.db3' },
//     },
//     production: {
//       ...sharedConfig,
//       connection: { filename: './data/plants.db3' },
//       pool: { min: 2, max: 10 },
//     },
//   }

require('dotenv').config()
const pg = require('pg')

if (process.env.DATABASE_URL) {
  pg.defaults.ssl = { rejectUnauthorized: false }
}

const sharedConfig = {
  client: 'pg',
  migrations: { directory: './api/data/migrations' },
  seeds: { directory: './api/data/seeds' },
}

module.exports = {
  development: {
    ...sharedConfig,
    connection: process.env.DEV_DATABASE_URL,
  },
  testing: {
    ...sharedConfig,
    connection: process.env.TESTING_DATABASE_URL,
  },
  production: {
    ...sharedConfig,
    connection: process.env.DATABASE_URL,
    pool: { min: 2, max: 10 },
  },
}

  