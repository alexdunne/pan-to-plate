import { models } from "models";

export interface RecipeRepository {
  findAll(): Promise<models.recipe.DBAttributes[]>;
  findById(id: string): Promise<models.recipe.DBAttributes>;
}
