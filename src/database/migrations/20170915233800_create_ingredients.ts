import * as Knex from "knex";

import { Ingredients } from "../../core/Tables";

exports.up = function(knex: Knex): Promise<any> {
  return Promise.all([
    knex.schema.createTable(Ingredients, (table: Knex.CreateTableBuilder) => {
      knex.raw('create extension if not exists "uuid-ossp"');
      // prettier-ignore
      table.uuid("id").notNullable().primary().defaultTo(knex.raw('uuid_generate_v4()'))
      table.string("name").notNullable();
      table.timestamps(false, true);
      table.dateTime("deleted_at");
    })
  ]);
};

exports.down = function(knex: Knex): Promise<any> {
  return Promise.all([knex.schema.dropTable(Ingredients)]);
};
