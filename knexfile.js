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
    production: {
      client: 'sqlite3',
      connection: process.env.DATABASE_URL,
      migrations: {
          directory: './data/migrations',
      },
      seeds: { directory: './data/seeds' },
  },
  }
  module.exports = {
    development: {
      ...sharedConfig,
      connection: { filename: './data/plants.db3' },
    }
  }
  