import { Application, Request, Response } from "express";
import * as GraphQLHTTP from "express-graphql";

export class GraphQLRoutes {
  static map(app: Application): void {
    app.use("/graphql", (req: Request, res: Response) => {
      GraphQLHTTP({
        schema: {},
        graphiql: true
      })(req, res);
    });
  }
}
