import { IngredientService } from "../services";

export class ServicesContext {
  static instance: ServicesContext;

  private ingredientService: IngredientService;

  static getInstance(): ServicesContext {
    if (!ServicesContext.instance) {
      ServicesContext.instance = new ServicesContext();
    }

    return ServicesContext.instance;
  }

  public getIngredientService(): IngredientService {
    return this.ingredientService;
  }

  public setIngredientService(ingredientService: IngredientService): ServicesContext {
    this.ingredientService = ingredientService;
    return this;
  }
}
