import * as Knex from "knex";

import { RecipesIngredients } from "../../core/Tables";

exports.up = function(knex: Knex): Promise<any> {
  return Promise.all([
    knex.schema.table(RecipesIngredients, (table: Knex.AlterTableBuilder) => {
      table.float("quantity", 8, 2);
    })
  ]);
};

exports.down = function(knex: Knex): Promise<any> {
  return Promise.all([
    knex.schema.table(RecipesIngredients, (table: Knex.AlterTableBuilder) => {
      table.dropColumn("quantity");
    })
  ]);
};
