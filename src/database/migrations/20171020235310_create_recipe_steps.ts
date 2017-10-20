import * as Knex from "knex";

import { Recipes, RecipesSteps } from "../../core/Tables";

exports.up = function(knex: Knex): Promise<any> {
  return Promise.all([
    knex.schema.createTable(RecipesSteps, (table: Knex.CreateTableBuilder) => {
      // prettier-ignore
      table.uuid("id").notNullable().primary().defaultTo(knex.raw('uuid_generate_v4()'));
      // prettier-ignore
      table.uuid(`${Recipes}_id`).references('id').inTable(Recipes);
      table.text("description");
      table.timestamps(false, true);
      table.dateTime("deleted_at");
    })
  ]);
};

exports.down = function(knex: Knex): Promise<any> {
  return Promise.all([knex.schema.dropTable(RecipesSteps), knex.schema.dropTable(Recipes)]);
};
