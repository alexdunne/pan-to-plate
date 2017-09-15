import * as Knex from "knex";

import Environment from "./Environment";

const Database: Knex = Knex(Environment.getKnexConfig());

export default Database;
