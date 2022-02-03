const sharedConfig = {
    client: 'sqlite3',
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done)
      },
    },
  }
  module.exports = {
    development: {
      ...sharedConfig,
      connection: { filename: './data/plants.db3' },
    },
    production: {
      ...sharedConfig,
      connection: { filename: './data/plants.db3' },
      pool: { min: 2, max: 10 },
    },
  }
  