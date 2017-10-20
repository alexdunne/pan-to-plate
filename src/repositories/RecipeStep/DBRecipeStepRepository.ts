import * as Knex from "knex";

import { models } from "models";
import { RecipeStepRepository } from "./RecipeStepRepository";
import { Recipes, RecipesSteps } from "../../core/Tables";
import ListUtils from "../../core/ListUtils";

export class DBRecipeStepRepository implements RecipeStepRepository {
  constructor(private db: Knex) {}

  public async findById(id: string): Promise<models.recipeStep.DBAttributes> {
    const results = await this.db
      .select()
      .from(RecipesSteps)
      .where("id", id)
      .andWhere("deleted_at", null);

    return ListUtils.head(results);
  }

  public async findByRecipe(recipeId: string): Promise<models.recipeStep.DBAttributes[]> {
    return this.db
      .select(`${RecipesSteps}.*`)
      .from(RecipesSteps)
      .innerJoin(Recipes, `${Recipes}.id`, `${RecipesSteps}.recipes_id`)
      .where(`${Recipes}.id`, recipeId)
      .andWhere(`${RecipesSteps}.deleted_at`, null);
  }

  public async create(recipeStep: models.recipeStep.DBAttributes): Promise<string> {
    const ids = await this.db
      .insert(recipeStep)
      .returning("id")
      .into(RecipesSteps);

    return ListUtils.head<string>(ids);
  }

  public async update(recipeStep: models.recipeStep.DBAttributes): Promise<void> {
    return this.db
      .update(recipeStep)
      .into(RecipesSteps)
      .where("id", recipeStep.id);
  }

  public async delete(id: string): Promise<void> {
    return this.db
      .from(RecipesSteps)
      .where("id", id)
      .delete();
  }

  public async deleteForRecipe(recipeId: string): Promise<void> {
    return this.db
      .from(RecipesSteps)
      .where("recipes_id", recipeId)
      .delete();
  }
}
