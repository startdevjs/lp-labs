// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  client: "sqlite3",
  connection: {
    filename: "./db.sqlite3",
  },
  useNullAsDefault: true,
  migrations: {
    directory: "./data/migrations",
  },
};
