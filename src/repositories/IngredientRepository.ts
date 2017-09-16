import * as Knex from "knex";

import { models } from "models";
import { Ingredients } from "../core/Tables";
import ListUtils from "../core/ListUtils";

export class IngredientRepository {
  private db: Knex;

  public async findAll(): Promise<models.ingredient.DBAttributes> {
    return this.db.select().from(Ingredients);
  }

  public async findById(id: number): Promise<models.ingredient.DBAttributes> {
    const results = await this.db
      .select()
      .from(Ingredients)
      .where("id", id);

    return ListUtils.head(results);
  }

  public async create(ingredient: models.ingredient.DBAttributes): Promise<number> {
    const ids = await this.db.insert(ingredient).into(Ingredients);
    return ListUtils.head<number>(ids);
  }

  public async update(ingredient: models.ingredient.DBAttributes): Promise<void> {
    await this.db
      .update(ingredient)
      .into(Ingredients)
      .where("id", ingredient.id);
  }

  public async delete(id: number): Promise<void> {
    await this.db
      .delete()
      .from(Ingredients)
      .where("id", id);
  }
}
