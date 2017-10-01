import { models } from "models";
import { Model } from "./Model";

export class RecipeIngredientModel implements Model<models.recipeIngredient.JsonAttributes, models.recipeIngredient.DBAttributes> {
  private id?: string;
  private recipeId?: string;
  private ingredientId?: string;
  private quantity?: number;

  constructor(attributes?: models.recipeIngredient.Attributes, isDbObject = true) {
    if (attributes) {
      isDbObject ? this.fromDatabaseObject(attributes) : this.fromJson(attributes);
    }
  }

  public getId(): string {
    return this.id;
  }

  public setId(value: string): RecipeIngredientModel {
    this.id = value;
    return this;
  }

  public getRecipeId(): string {
    return this.recipeId;
  }

  public setRecipeId(value: string): RecipeIngredientModel {
    this.recipeId = value;
    return this;
  }

  public getIngredientId(): string {
    return this.ingredientId;
  }

  public setIngredientId(value: string): RecipeIngredientModel {
    this.ingredientId = value;
    return this;
  }

  public getQuantity(): number {
    return this.quantity;
  }

  public setQuantity(value: number): RecipeIngredientModel {
    this.quantity = value;
    return this;
  }

  public validate() {
    return !!this.recipeId && !!this.ingredientId && !!this.quantity;
  }

  /**
   * Used to send data to the user
   */
  public toJson(): RecipeIngredient {
    return new RecipeIngredient(this);
  }

  /**
   * Used for creating/updating records
   */
  public toDatabaseObject(): DBRecipeIngredient {
    return new DBRecipeIngredient(this);
  }

  public fromJson(attributes: models.recipeIngredient.JsonAttributes): RecipeIngredientModel {
    if (attributes !== undefined) {
      this.setId(attributes.id);
      this.setRecipeId(attributes.recipeId);
      this.setIngredientId(attributes.ingredientId);
      this.setQuantity(attributes.quantity);
    }

    return this;
  }

  public fromDatabaseObject(attributes: models.recipeIngredient.DBAttributes): RecipeIngredientModel {
    if (attributes !== undefined) {
      this.setId(attributes.id);
      this.setRecipeId(attributes.recipes_id);
      this.setIngredientId(attributes.ingredients_id);
      this.setQuantity(attributes.quantity);
    }

    return this;
  }
}

export class RecipeIngredient implements models.recipeIngredient.JsonAttributes {
  public id?: string;
  public recipeId?: string;
  public ingredientId?: string;
  public quantity?: number;

  constructor(model: RecipeIngredientModel) {
    this.id = model.getId();
    this.recipeId = model.getRecipeId();
    this.ingredientId = model.getIngredientId();
    this.quantity = model.getQuantity();
  }
}

export class DBRecipeIngredient implements models.recipeIngredient.DBAttributes {
  public id?: string;
  public recipes_id?: string;
  public ingredients_id?: string;
  public quantity?: number;

  constructor(model: RecipeIngredientModel) {
    this.id = model.getId();
    this.recipes_id = model.getRecipeId();
    this.ingredients_id = model.getIngredientId();
    this.quantity = model.getQuantity();
  }
}
