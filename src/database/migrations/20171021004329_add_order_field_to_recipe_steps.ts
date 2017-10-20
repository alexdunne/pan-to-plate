import * as Knex from "knex";

import { RecipesSteps } from "../../core/Tables";

exports.up = function(knex: Knex): Promise<any> {
  return Promise.all([
    knex.schema.table(RecipesSteps, (table: Knex.AlterTableBuilder) => {
      table.integer("order_number");
    })
  ]);
};

exports.down = function(knex: Knex): Promise<any> {
  return Promise.all([
    knex.schema.table(RecipesSteps, (table: Knex.AlterTableBuilder) => {
      table.dropColumn("order_number");
    })
  ]);
};
