import * as Knex from "knex";

import { models } from "models";
import { IngredientRepository } from "./IngredientRepository";
import { Ingredients } from "../../core/Tables";
import ListUtils from "../../core/ListUtils";

export class DBIngredientRepository implements IngredientRepository {
  constructor(private db: Knex) {}

  public async findAll(): Promise<models.ingredient.DBAttributes[]> {
    return this.db.select().from(Ingredients);
  }

  public async findById(id: string): Promise<models.ingredient.DBAttributes> {
    const results = await this.db
      .select()
      .from(Ingredients)
      .where("id", id);

    return ListUtils.head(results);
  }

  public async create(ingredient: models.ingredient.DBAttributes): Promise<string> {
    const ids = await this.db.insert(ingredient).into(Ingredients);
    return ListUtils.head<string>(ids);
  }

  public async update(ingredient: models.ingredient.DBAttributes): Promise<void> {
    return this.db
      .update(ingredient)
      .into(Ingredients)
      .where("id", ingredient.id);
  }

  public async delete(id: string): Promise<void> {
    return this.db
      .update({
        deleted_at: true
      })
      .from(Ingredients)
      .where("id", id);
  }
}