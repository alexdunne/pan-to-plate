import { models } from "models";

export interface RecipeStepRepository {
  findById(id: string): Promise<models.recipeStep.DBAttributes>;
  findByRecipe(recipeId: string): Promise<models.recipeStep.DBAttributes[]>;
  create(step: models.recipeStep.DBAttributes): Promise<string>;
  update(step: models.recipeStep.DBAttributes): Promise<void>;
  delete(id: string): Promise<void>;
  deleteForRecipe(recipeId: string): Promise<void>;
}
