import { RecipeStepRepository } from "../repositories/RecipeStep";
import { RecipeStepModel } from "../models/RecipeStepModel";
import NotFoundException from "../exceptions/NotFoundException";

export class RecipeStepService {
  constructor(private recipeStepRepository: RecipeStepRepository) {}

  public async findById(id: string): Promise<RecipeStepModel> {
    const result = await this.recipeStepRepository.findById(id);

    if (result === null) {
      throw new NotFoundException(id);
    }

    return new RecipeStepModel(result, true);
  }

  public async findByRecipe(recipeId: string): Promise<RecipeStepModel[]> {
    const results = await this.recipeStepRepository.findByRecipe(recipeId);
    return results.map(result => new RecipeStepModel(result, true));
  }

  public async create(recipeStepModel: RecipeStepModel): Promise<RecipeStepModel> {
    const id = await this.recipeStepRepository.create(recipeStepModel.toDatabaseObject());
    return this.findById(id);
  }

  public async update(updatedRecipeStep: RecipeStepModel): Promise<RecipeStepModel> {
    const model = await this.findById(updatedRecipeStep.getId());
    updatedRecipeStep.setUpdatedAt(new Date());

    model.merge(updatedRecipeStep);

    await this.recipeStepRepository.update(model.toDatabaseObject());
    return this.findById(model.getId());
  }

  public async delete(id: string): Promise<void> {
    return this.recipeStepRepository.delete(id);
  }

  public async deleteForRecipe(recipeId: string): Promise<void> {
    return this.recipeStepRepository.deleteForRecipe(recipeId);
  }
}
