import { models } from "models";
import { Model } from "./Model";

export class RecipeStepModel implements Model<models.recipeStep.JsonAttributes, models.recipeStep.DBAttributes> {
  id?: string;
  recipeId?: string;
  description?: string;
  orderNumber?: number;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;

  constructor(attributes?: models.recipeStep.Attributes, isDbObject = true) {
    if (attributes) {
      isDbObject ? this.fromDatabaseObject(attributes) : this.fromJson(attributes);
    }
  }

  public getId(): string {
    return this.id;
  }

  public setId(value: string): RecipeStepModel {
    this.id = value;
    return this;
  }

  public getRecipeId(): string {
    return this.recipeId;
  }

  public setRecipeId(value: string): RecipeStepModel {
    this.recipeId = value;
    return this;
  }

  public getDescription(): string {
    return this.description;
  }

  public setDescription(value: string): RecipeStepModel {
    this.description = value;
    return this;
  }

  public getOrderNumber(): number {
    return this.orderNumber;
  }

  public setOrderNumber(value: number): RecipeStepModel {
    this.orderNumber = value;
    return this;
  }

  public getCreatedAt(): Date {
    return this.createdAt;
  }

  public setCreatedAt(value: Date): RecipeStepModel {
    this.createdAt = value;
    return this;
  }

  public getUpdatedAt(): Date {
    return this.updatedAt;
  }

  public setUpdatedAt(value: Date): RecipeStepModel {
    this.updatedAt = value;
    return this;
  }

  public getDeletedAt(): Date {
    return this.deletedAt;
  }

  public setDeletedAt(value: Date): RecipeStepModel {
    this.deletedAt = value;
    return this;
  }

  public fromJson(attributes: models.recipeStep.JsonAttributes): RecipeStepModel {
    if (attributes !== undefined) {
      this.setId(attributes.id);
      this.setRecipeId(attributes.recipeId);
      this.setDescription(attributes.description);
      this.setOrderNumber(attributes.orderNumber);
      this.setCreatedAt(attributes.created_at);
      this.setUpdatedAt(attributes.updated_at);
      this.setDeletedAt(attributes.deleted_at);
    }

    return this;
  }

  public fromDatabaseObject(attributes: models.recipeStep.DBAttributes): RecipeStepModel {
    if (attributes !== undefined) {
      this.setId(attributes.id);
      this.setRecipeId(attributes.recipes_id);
      this.setDescription(attributes.description);
      this.setOrderNumber(attributes.order_number);
      this.setCreatedAt(attributes.created_at);
      this.setUpdatedAt(attributes.updated_at);
      this.setDeletedAt(attributes.deleted_at);
    }

    return this;
  }

  public validate(): boolean {
    return !!this.recipeId && !!this.description;
  }

  /**
   * Used to send data to the user
   */
  public toJson(): RecipeStep {
    return new RecipeStep(this);
  }

  /**
   * Used for creating/updating records
   */
  public toDatabaseObject(): DBRecipeStep {
    return new DBRecipeStep(this);
  }

  /**
   * Merges a new model into the existing model
   * 
   * @param model The new model - prefer values from this
   */
  public merge(model: RecipeStepModel): RecipeStepModel {
    this.setDescription(model.getDescription() || this.getDescription());
    this.setOrderNumber(model.getOrderNumber() || this.getOrderNumber());
    this.setCreatedAt(model.getCreatedAt() || this.getCreatedAt());
    this.setUpdatedAt(model.getUpdatedAt() || this.getUpdatedAt());
    this.setDeletedAt(model.getDeletedAt() || this.getDeletedAt());
    return this;
  }
}

export class RecipeStep implements models.recipeStep.JsonAttributes {
  id?: string;
  recipeId?: string;
  description?: string;
  orderNumber?: number;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;

  constructor(model: RecipeStepModel) {
    this.id = model.getId();
    this.recipeId = model.getRecipeId();
    this.description = model.getDescription();
    this.orderNumber = model.getOrderNumber();
    this.createdAt = model.getCreatedAt();
    this.updatedAt = model.getUpdatedAt();
    this.deletedAt = model.getDeletedAt();
  }
}

export class DBRecipeStep implements models.recipeStep.DBAttributes {
  public id?: string;
  public recipes_id?: string;
  public description?: string;
  public order_number?: number;
  public created_at?: Date;
  public updated_at?: Date;
  public deleted_at?: Date;

  constructor(model: RecipeStepModel) {
    this.id = model.getId();
    this.recipes_id = model.getRecipeId();
    this.description = model.getDescription();
    this.order_number = model.getOrderNumber();
    this.created_at = model.getCreatedAt();
    this.updated_at = model.getUpdatedAt();
    this.deleted_at = model.getDeletedAt();
  }
}
