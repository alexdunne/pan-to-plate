module.exports = {
  client: process.env.DB_CLIENT || "postgresql",
  connection: {
    host: process.env.POSTGRES_HOST || "db",
    user: process.env.POSTGRES_USER || "pantoplate",
    password: process.env.POSTGRES_PASSWORD || "",
    database: process.env.POSTGRES_DB_NAME || "pantoplate"
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: "migrations",
    directory: "./dist/database/migrations"
  },
  seeds: {
    directory: "./dist/database/seeds"
  }
};
