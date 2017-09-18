import * as Knex from "knex";

import { Recipes, RecipesIngredients, Ingredients } from "../../core/Tables";

exports.up = function(knex: Knex): Promise<any> {
  return Promise.all([
    knex.schema
      .createTable(Recipes, (table: Knex.CreateTableBuilder) => {
        // prettier-ignore
        table.uuid("id").notNullable().primary().defaultTo(knex.raw('uuid_generate_v4()'));
        table.string("name", 255).notNullable();
        table.text("description");
        table.timestamps(false, true);
        table.dateTime("deleted_at");
      })
      .then(() => {
        return knex.schema.createTable(RecipesIngredients, (table: Knex.CreateTableBuilder) => {
          // prettier-ignore
          table.uuid("id").notNullable().primary().defaultTo(knex.raw('uuid_generate_v4()'));
          // prettier-ignore
          table.uuid(`${Recipes}_id`).references('id').inTable(Recipes);
          // prettier-ignore
          table.uuid(`${Ingredients}_id`).references('id').inTable(Ingredients);
        });
      })
  ]);
};

exports.down = function(knex: Knex): Promise<any> {
  return Promise.all([knex.schema.dropTable(RecipesIngredients), knex.schema.dropTable(Recipes)]);
};
