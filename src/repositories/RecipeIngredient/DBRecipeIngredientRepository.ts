import * as Knex from "knex";

import { models } from "models";
import { RecipeIngredientRepository } from "./RecipeIngredientRepository";
import { Recipes, RecipesIngredients } from "../../core/Tables";
import ListUtils from "../../core/ListUtils";

export class DBRecipeIngredientRepository implements RecipeIngredientRepository {
  constructor(private db: Knex) {}

  public async findById(id: string): Promise<models.recipeIngredient.DBAttributes> {
    const results = await this.db
      .select()
      .from(RecipesIngredients)
      .where("id", id);

    return ListUtils.head(results);
  }

  public async findByRecipe(recipeId: string): Promise<models.recipeIngredient.DBAttributes[]> {
    return this.db
      .select(`${RecipesIngredients}.*`)
      .from(RecipesIngredients)
      .innerJoin(Recipes, `${Recipes}.id`, `${RecipesIngredients}.recipes_id`)
      .where(`${Recipes}.id`, recipeId);
  }

  public async create(recipeIngredient: models.recipeIngredient.DBAttributes): Promise<string> {
    const ids = await this.db
      .insert(recipeIngredient)
      .returning("id")
      .into(RecipesIngredients);

    return ListUtils.head<string>(ids);
  }

  public async delete(id: string): Promise<void> {
    return this.db
      .from(RecipesIngredients)
      .where("id", id)
      .delete();
  }

  public async deleteForRecipe(recipeId: string): Promise<void> {
    return this.db
      .from(RecipesIngredients)
      .where("recipes_id", recipeId)
      .delete();
  }
}
