import IngredientRepository from "../repositories/IngredientRepository";
import { IngredientModel } from "../models/IngredientModel";
import NotFoundException from "../exceptions/NotFoundException";

export class IngredientService {
  constructor(private ingredientRepository: IngredientRepository) {}

  public async findAll(): Promise<IngredientModel[]> {
    const results = await this.ingredientRepository.findAll();
    return results.map(result => new IngredientModel(result));
  }

  public async findById(id: string): Promise<IngredientModel> {
    const result = await this.ingredientRepository.findById(id);

    if (result === null) {
      throw new NotFoundException(id);
    }

    return new IngredientModel(result);
  }

  public async create(ingredientModel: IngredientModel): Promise<IngredientModel> {
    const id = await this.ingredientRepository.create(ingredientModel.toDatabaseObject());
    return this.findById(id);
  }

  public async update(updatedIngredientModel: IngredientModel): Promise<IngredientModel> {
    const ingredientModel = await this.findById(updatedIngredientModel.getId());
    ingredientModel.merge(updatedIngredientModel);
    await this.ingredientRepository.update(ingredientModel.toDatabaseObject());
    return this.findById(ingredientModel.getId());
  }

  public async delete(id: string): Promise<void> {
    return this.ingredientRepository.delete(id);
  }
}
