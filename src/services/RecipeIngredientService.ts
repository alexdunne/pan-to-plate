import { RecipeIngredientRepository } from "../repositories/RecipeIngredient";
import { RecipeIngredientModel } from "../models/RecipeIngredientModel";
import NotFoundException from "../exceptions/NotFoundException";

export class RecipeIngredientService {
  constructor(private recipeIngredientRepository: RecipeIngredientRepository) {}

  public async findById(id: string): Promise<RecipeIngredientModel> {
    const result = await this.recipeIngredientRepository.findById(id);

    if (result === null) {
      throw new NotFoundException(id);
    }

    return new RecipeIngredientModel(result, true);
  }

  public async findByRecipe(recipeId: string): Promise<RecipeIngredientModel[]> {
    const results = await this.recipeIngredientRepository.findByRecipe(recipeId);
    return results.map(result => new RecipeIngredientModel(result, true));
  }

  public async create(recipeIngredientModel: RecipeIngredientModel): Promise<RecipeIngredientModel> {
    const id = await this.recipeIngredientRepository.create(recipeIngredientModel.toDatabaseObject());
    return this.findById(id);
  }

  public async delete(id: string): Promise<void> {
    return this.recipeIngredientRepository.delete(id);
  }
}
