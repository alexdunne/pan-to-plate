import { Application, Request, Response } from "express";
import * as GraphQLHTTP from "express-graphql";

import Environment from "../core/Environment";
import Database from "../core/Database";

export class GraphQLRoutes {
  static map(app: Application): void {
    app.use("/graphql", (req: Request, res: Response) => {
      GraphQLHTTP({
        schema: {},
        graphiql: Environment.isGraphiqlActive()
      })(req, res);
    });
  }
}
