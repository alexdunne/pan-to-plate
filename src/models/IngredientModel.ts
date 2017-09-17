import { models } from "models";
import AbstactModel from "./AbstractModel";

export class IngredientModel implements AbstactModel<models.ingredient.JsonAttributes, models.ingredient.DBAttributes> {
  private id?: string;
  private name?: string;
  private createdAt?: Date;
  private updatedAt?: Date;
  private deletedAt?: Date;

  constructor(attributes?: models.ingredient.Attributes, isDbObject = true) {
    if (attributes) {
      isDbObject ? this.mapDatabaseObject(attributes) : this.mapJson(attributes);
    }
  }

  public getId(): string {
    return this.id;
  }

  public setId(value: string) {
    this.id = value;
  }

  public getName(): string {
    return this.name;
  }

  public setName(value: string) {
    this.name = value;
  }

  public getCreatedAt(): Date {
    return this.createdAt;
  }

  public setCreatedAt(value: Date) {
    this.createdAt = value;
  }

  public getUpdatedAt(): Date {
    return this.updatedAt;
  }

  public setUpdatedAt(value: Date) {
    this.updatedAt = value;
  }

  public getDeletedAt(): Date {
    return this.deletedAt;
  }

  public setDeletedAt(value: Date) {
    this.deletedAt = value;
  }

  public mapJson(attributes: models.ingredient.JsonAttributes): IngredientModel {
    if (attributes !== undefined) {
      this.setId(attributes.id);
      this.setName(attributes.name);
      this.setCreatedAt(attributes.created_at);
      this.setUpdatedAt(attributes.updated_at);
      this.setDeletedAt(attributes.deleted_at);
    }

    return this;
  }

  public mapDatabaseObject(attributes: models.ingredient.DBAttributes): IngredientModel {
    if (attributes !== undefined) {
      this.setId(attributes.id);
      this.setName(attributes.name);
      this.setCreatedAt(attributes.created_at);
      this.setUpdatedAt(attributes.updated_at);
      this.setDeletedAt(attributes.deleted_at);
    }

    return this;
  }

  /**
   * Used to send data to the user
   */
  public toJson(): Ingredient {
    return new Ingredient(this);
  }

  /**
   * Used for creating/updating records
   */
  public toDatabaseObject(): DBIngredient {
    return new DBIngredient(this);
  }

  /**
   * Merges a new model into the existing model
   * 
   * @param model The new model - prefer values from this
   */
  public merge(model: IngredientModel): IngredientModel {
    this.setName(model.getName() || this.getName());
    return this;
  }
}

export class Ingredient implements models.ingredient.JsonAttributes {
  public id?: string;
  public name: string;
  public createdAt?: Date;
  public updatedAt?: Date;
  public deletedAt?: Date;

  constructor(model: IngredientModel) {
    this.id = model.getId();
    this.name = model.getName();
    this.createdAt = model.getCreatedAt();
    this.updatedAt = model.getUpdatedAt();
    this.deletedAt = model.getDeletedAt();
  }
}

export class DBIngredient implements models.ingredient.DBAttributes {
  public id?: string;
  public name: string;
  public createdAt?: Date;
  public updatedAt?: Date;
  public deletedAt?: Date;

  constructor(model: IngredientModel) {
    this.id = model.getId();
    this.name = model.getName();
    this.createdAt = model.getCreatedAt();
    this.updatedAt = model.getUpdatedAt();
    this.deletedAt = model.getDeletedAt();
  }
}
