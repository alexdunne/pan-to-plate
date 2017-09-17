import * as Knex from "knex";

exports.up = function(knex: Knex): Promise<any> {
  return Promise.all([knex.raw('create extension if not exists "uuid-ossp"')]);
};

exports.down = function(knex: Knex): Promise<any> {
  return Promise.all([knex.raw('drop extension if exists "uuid-ossp"')]);
};
