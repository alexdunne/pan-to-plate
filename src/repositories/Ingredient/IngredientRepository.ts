import { models } from "models";

export interface IngredientRepository {
  findAll(): Promise<models.ingredient.DBAttributes[]>;
  findById(id: string): Promise<models.ingredient.DBAttributes>;
  create(ingredient: models.ingredient.DBAttributes): Promise<string>;
  update(ingredient: models.ingredient.DBAttributes): Promise<void>;
  delete(id: string): Promise<void>;
}
