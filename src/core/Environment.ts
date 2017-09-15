export default class Environment {
  static getEnvironment(): string {
    return process.env.NODE_ENV || "development";
  }

  static getPort(): number {
    return parseInt(process.env.PORT, 10) || 3000;
  }

  static getDatabaseClient(): string {
    return process.env.DB_CLIENT || "pg";
  }

  static getDatabaseHost(): string {
    return process.env.POSTGRES_HOST || "db";
  }

  static getDatabaseUser(): string {
    return process.env.POSTGRES_USER || "pantoplate";
  }

  static getDatabasePassword(): string {
    return process.env.POSTGRES_PASSWORD || "";
  }

  static getDatabaseName(): string {
    return process.env.POSTGRES_DB_NAME || "pantoplate";
  }

  static isGraphiqlActive(): boolean {
    return process.env.GRAPHIQL_ACTIVE == "true" || false;
  }
}
