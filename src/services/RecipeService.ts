import { RecipeRepository } from "../repositories/Recipe";
import { RecipeModel } from "../models/RecipeModel";
import NotFoundException from "../exceptions/NotFoundException";

export class RecipeService {
  constructor(private recipeRepository: RecipeRepository) {}

  public async findAll(): Promise<RecipeModel[]> {
    const results = await this.recipeRepository.findAll();
    return results.map(result => new RecipeModel(result, true));
  }

  public async findById(id: string): Promise<RecipeModel> {
    const result = await this.recipeRepository.findById(id);

    if (result === null) {
      throw new NotFoundException(id);
    }

    return new RecipeModel(result, true);
  }
}
