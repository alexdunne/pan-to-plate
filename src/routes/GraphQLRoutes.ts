import { Application, Request, Response } from "express";
import * as GraphQLHTTP from "express-graphql";

import Environment from "../core/Environment";
import Database from "../core/Database";
import { Context, ServicesContext } from "../context";

import { DBIngredientRepository } from "../repositories/Ingredient";
import { DBRecipeRepository } from "../repositories/Recipe";
import { DBRecipeIngredientRepository } from "../repositories/RecipeIngredient";
import { DBRecipeStepRepository } from "../repositories/RecipeStep";
import { IngredientService, RecipeService, RecipeIngredientService, RecipeStepService } from "../services";
import Schema from "../schemas";

export class GraphQLRoutes {
  static map(app: Application): void {
    GraphQLRoutes.buildContext();

    app.use("/graphql", (req: Request, res: Response) => {
      GraphQLHTTP({
        schema: Schema,
        context: new Context(req, res, ServicesContext.getInstance()),
        graphiql: Environment.isGraphiqlActive()
      })(req, res);
    });
  }

  /**
   * Build a context instance and attach any services
   */
  private static buildContext(): void {
    ServicesContext.getInstance()
      .setIngredientService(new IngredientService(new DBIngredientRepository(Database)))
      .setRecipeService(new RecipeService(new DBRecipeRepository(Database)))
      .setRecipeIngredientService(new RecipeIngredientService(new DBRecipeIngredientRepository(Database)))
      .setRecipeStepService(new RecipeStepService(new DBRecipeStepRepository(Database)));
  }
}
