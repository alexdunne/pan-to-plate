import { models } from "models";

export interface RecipeIngredientRepository {
  findById(id: string): Promise<models.recipeIngredient.DBAttributes>;
  findByRecipe(recipeId: string): Promise<models.recipeIngredient.DBAttributes[]>;
  create(recipe: models.recipeIngredient.DBAttributes): Promise<string>;
  delete(id: string): Promise<void>;
  deleteForRecipe(recipeId: string): Promise<void>;
}
