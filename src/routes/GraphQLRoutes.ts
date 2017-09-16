import { Application, Request, Response } from "express";
import * as GraphQLHTTP from "express-graphql";

import Environment from "../core/Environment";
import Database from "../core/Database";
import { Context, ServicesContext } from "../context";
import { IngredientRepository } from "../repositories";
import { IngredientService } from "../services";

export class GraphQLRoutes {
  static map(app: Application): void {
    GraphQLRoutes.buildContext();

    app.use("/graphql", (req: Request, res: Response) => {
      GraphQLHTTP({
        schema: {},
        context: new Context(req, res, ServicesContext.getInstance()),
        graphiql: Environment.isGraphiqlActive()
      })(req, res);
    });
  }

  /**
   * Build a context instance and attach any services
   */
  private static buildContext(): void {
    ServicesContext.getInstance().setIngredientService(new IngredientService(new IngredientRepository(Database)));
  }
}
