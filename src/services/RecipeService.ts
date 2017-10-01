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

  public async create(model: RecipeModel): Promise<RecipeModel> {
    const id = await this.recipeRepository.create(model.toDatabaseObject());
    return this.findById(id);
  }

  public async update(updatedRecipeModel: RecipeModel): Promise<RecipeModel> {
    const model = await this.findById(updatedRecipeModel.getId());
    updatedRecipeModel.setUpdatedAt(new Date());

    model.merge(updatedRecipeModel);

    await this.recipeRepository.update(model.toDatabaseObject());
    return this.findById(model.getId());
  }

  public async delete(id: string): Promise<void> {
    return this.recipeRepository.delete(id);
  }
}
