import * as Knex from "knex";

import { Ingredients } from "../../core/Tables";
exports.up = function(knex: Knex): Promise<any> {
  return Promise.all([
    knex.schema.createTable(Ingredients, (table: Knex.CreateTableBuilder) => {
      // prettier-ignore
      table.uuid("id").notNullable().primary();
      table.string("name").notNullable();
      table.dateTime("deleted_at");
      table.timestamps();
    })
  ]);
};

exports.down = function(knex: Knex): Promise<any> {
  return Promise.all([knex.schema.dropTable(Ingredients)]);
};