import * as Knex from "knex";

import Environment from "./Environment";

const DB: Knex = Knex({
  client: Environment.getDatabaseClient(),
  connection: {
    host: Environment.getDatabaseHost(),
    user: Environment.getDatabaseUser(),
    password: Environment.getDatabasePassword(),
    database: Environment.getDatabaseName()
  },
  migrations: {
    tableName: "migrations"
  }
});

export default DB;
