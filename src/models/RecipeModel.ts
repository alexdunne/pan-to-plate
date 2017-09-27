import { models } from "models";
import { Model } from "./Model";
import { IngredientModel } from "./IngredientModel";

export class RecipeModel {
  private id?: string;
  private name?: string;
  private description?: string;
  private createdAt?: Date;
  private updatedAt?: Date;
  private deletedAt?: Date;

  constructor(attributes?: models.recipe.Attributes, isDbObject = true) {
    if (attributes) {
      isDbObject ? this.fromDatabaseObject(attributes) : this.fromJson(attributes);
    }
  }

  public getId(): string {
    return this.id;
  }

  public setId(value: string): RecipeModel {
    this.id = value;
    return this;
  }

  public getName(): string {
    return this.name;
  }

  public setName(value: string): RecipeModel {
    this.name = value;
    return this;
  }

  public getDescription(): string {
    return this.description;
  }

  public setDescription(value: string): RecipeModel {
    this.description = value;
    return this;
  }

  public getCreatedAt(): Date {
    return this.createdAt;
  }

  public setCreatedAt(value: Date): RecipeModel {
    this.createdAt = value;
    return this;
  }

  public getUpdatedAt(): Date {
    return this.updatedAt;
  }

  public setUpdatedAt(value: Date): RecipeModel {
    this.updatedAt = value;
    return this;
  }

  public getDeletedAt(): Date {
    return this.deletedAt;
  }

  public setDeletedAt(value: Date): RecipeModel {
    this.deletedAt = value;
    return this;
  }

  public fromJson(attributes: models.recipe.JsonAttributes): RecipeModel {
    if (attributes !== undefined) {
      this.setId(attributes.id);
      this.setName(attributes.name);
      this.setDescription(attributes.description);
      this.setCreatedAt(attributes.created_at);
      this.setUpdatedAt(attributes.updated_at);
      this.setDeletedAt(attributes.deleted_at);
    }

    return this;
  }

  public fromDatabaseObject(attributes: models.recipe.DBAttributes): RecipeModel {
    if (attributes !== undefined) {
      this.setId(attributes.id);
      this.setName(attributes.name);
      this.setDescription(attributes.description);
      this.setCreatedAt(attributes.created_at);
      this.setUpdatedAt(attributes.updated_at);
      this.setDeletedAt(attributes.deleted_at);
    }

    return this;
  }
}
