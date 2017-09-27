import * as Knex from "knex";

import { models } from "models";
import { RecipeRepository } from "./RecipeRepository";
import { Recipes } from "../../core/Tables";
import ListUtils from "../../core/ListUtils";

export class DBRecipeRepository implements RecipeRepository {
  constructor(private db: Knex) {}

  public async findAll(): Promise<models.recipe.DBAttributes[]> {
    return this.db
      .select()
      .from(Recipes)
      .where("deleted_at", null);
  }

  public async findById(id: string): Promise<models.recipe.DBAttributes> {
    const results = await this.db
      .select()
      .from(Recipes)
      .where("id", id)
      .andWhere("deleted_at", null);

    return ListUtils.head(results);
  }
}
