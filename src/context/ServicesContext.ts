import { IngredientService, RecipeService, RecipeIngredientService, RecipeStepService } from "../services";

export class ServicesContext {
  static instance: ServicesContext;

  private ingredientService: IngredientService;
  private recipeService: RecipeService;
  private recipeIngredientService: RecipeIngredientService;
  private recipeStepService: RecipeStepService;

  static getInstance(): ServicesContext {
    if (!ServicesContext.instance) {
      ServicesContext.instance = new ServicesContext();
    }

    return ServicesContext.instance;
  }

  public get IngredientService(): IngredientService {
    return this.ingredientService;
  }

  public setIngredientService(ingredientService: IngredientService): ServicesContext {
    this.ingredientService = ingredientService;
    return this;
  }

  public get RecipeService(): RecipeService {
    return this.recipeService;
  }

  public setRecipeService(recipeService: RecipeService): ServicesContext {
    this.recipeService = recipeService;
    return this;
  }

  public get RecipeIngredientService(): RecipeIngredientService {
    return this.recipeIngredientService;
  }

  public setRecipeIngredientService(recipeIngredientService: RecipeIngredientService): ServicesContext {
    this.recipeIngredientService = recipeIngredientService;
    return this;
  }

  public get RecipeStepService(): RecipeStepService {
    return this.recipeStepService;
  }

  public setRecipeStepService(recipeStepService: RecipeStepService): ServicesContext {
    this.recipeStepService = recipeStepService;
    return this;
  }
}
