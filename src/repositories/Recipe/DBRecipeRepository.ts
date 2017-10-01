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

  public async create(recipe: models.recipe.DBAttributes): Promise<string> {
    const ids = await this.db
      .insert(recipe)
      .returning("id")
      .into(Recipes);

    return ListUtils.head<string>(ids);
  }

  public async update(recipe: models.recipe.DBAttributes): Promise<void> {
    return this.db
      .update(recipe)
      .into(Recipes)
      .where("id", recipe.id);
  }

  public async delete(id: string): Promise<void> {
    return this.db
      .update({
        deleted_at: new Date()
      })
      .from(Recipes)
      .where("id", id);
  }
}
