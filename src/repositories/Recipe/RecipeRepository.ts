import { models } from "models";

export interface RecipeRepository {
  findAll(): Promise<models.recipe.DBAttributes[]>;
  findById(id: string): Promise<models.recipe.DBAttributes>;
  create(recipe: models.recipe.DBAttributes): Promise<string>;
  update(recipe: models.recipe.DBAttributes): Promise<void>;
  delete(id: string): Promise<void>;
}
