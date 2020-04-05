module.exports = {
    development: {
      client: process.env.CLIENT || "sqlite3",
      useNullAsDefault: true,
      connection: {
        filename: "./database/auth.db3",
      },
      pool: {
        afterCreate: (conn, done) => {
          conn.run("PRAGMA foreign_keys = ON", done)
        },
      },
      migrations: {
        directory: "./database/migrations",
      },
      seeds: {
        directory: "./database/seeds",
      },
    },
  }