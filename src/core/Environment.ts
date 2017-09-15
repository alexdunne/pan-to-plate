import * as Knex from "knex";

const KnexConfig = require("../knexfile");

export default class Environment {
  static getEnvironment(): string {
    return process.env.NODE_ENV || "development";
  }

  static getPort(): number {
    return parseInt(process.env.PORT, 10) || 3000;
  }

  static getKnexConfig(): Knex.Config {
    return KnexConfig;
  }

  static isGraphiqlActive(): boolean {
    return process.env.GRAPHIQL_ACTIVE == "true" || false;
  }
}
