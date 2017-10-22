import { models } from "models";
import { Model } from "./Model";

export class RecipeModel implements Model<models.recipe.JsonAttributes, models.recipe.DBAttributes> {
  private id?: string;
  private name?: string;
  private description?: string;
  private slug?: string;
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

  public getSlug(): string {
    return this.slug;
  }

  public setSlug(value: string): RecipeModel {
    this.slug = value;
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

  public validate() {
    return !!this.name && !!this.description;
  }

  /**
   * Merges a new model into the existing model
   *
   * @param model The new model - prefer values from this
   */
  public merge(model: RecipeModel): RecipeModel {
    this.setName(model.getName() || this.getName());
    this.setDescription(model.getDescription() || this.getDescription());
    this.setSlug(model.getSlug() || this.getSlug());
    this.setCreatedAt(model.getCreatedAt() || this.getCreatedAt());
    this.setUpdatedAt(model.getUpdatedAt() || this.getUpdatedAt());
    this.setDeletedAt(model.getDeletedAt() || this.getDeletedAt());
    return this;
  }

  /**
   * Used to send data to the user
   */
  public toJson(): Recipe {
    return new Recipe(this);
  }

  /**
   * Used for creating/updating records
   */
  public toDatabaseObject(): DBRecipe {
    return new DBRecipe(this);
  }

  public fromJson(attributes: models.recipe.JsonAttributes): RecipeModel {
    if (attributes !== undefined) {
      this.setId(attributes.id);
      this.setName(attributes.name);
      this.setDescription(attributes.description);
      this.setSlug(attributes.slug);
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
      this.setSlug(attributes.slug);
      this.setCreatedAt(attributes.created_at);
      this.setUpdatedAt(attributes.updated_at);
      this.setDeletedAt(attributes.deleted_at);
    }

    return this;
  }
}

export class Recipe implements models.recipe.JsonAttributes {
  public id?: string;
  public name?: string;
  public description?: string;
  public slug?: string;
  public createdAt?: Date;
  public updatedAt?: Date;
  public deletedAt?: Date;

  constructor(model: RecipeModel) {
    this.id = model.getId();
    this.name = model.getName();
    this.description = model.getDescription();
    this.slug = model.getSlug();
    this.createdAt = model.getCreatedAt();
    this.updatedAt = model.getUpdatedAt();
    this.deletedAt = model.getDeletedAt();
  }
}

export class DBRecipe implements models.recipe.DBAttributes {
  public id?: string;
  public name?: string;
  public description?: string;
  public slug?: string;
  public created_at?: Date;
  public updated_at?: Date;
  public deleted_at?: Date;

  constructor(model: RecipeModel) {
    this.id = model.getId();
    this.name = model.getName();
    this.description = model.getDescription();
    this.slug = model.getSlug();
    this.created_at = model.getCreatedAt();
    this.updated_at = model.getUpdatedAt();
    this.deleted_at = model.getDeletedAt();
  }
}
