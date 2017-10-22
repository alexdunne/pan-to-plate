import * as Knex from "knex";

import { Recipes } from "../../core/Tables";

exports.up = function(knex: Knex): Promise<any> {
  return Promise.all([
    knex.schema.table(Recipes, (table: Knex.AlterTableBuilder) => {
      table.string("slug");
    })
  ]);
};

exports.down = function(knex: Knex): Promise<any> {
  return Promise.all([
    knex.schema.table(Recipes, (table: Knex.AlterTableBuilder) => {
      table.dropColumn("slug");
    })
  ]);
};
