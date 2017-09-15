require("dotenv").config();

import * as express from "express";
import { Request, Response } from "express";

import Environment from "./core/Environment";
import { GraphQLRoutes, Routes } from "./routes";

const app = express();

Routes.map(app);
GraphQLRoutes.map(app);

app.listen(Environment.getPort(), () => {
  console.log(
    "App is running at http://localhost:%d in %s mode",
    Environment.getPort(),
    Environment.getEnvironment()
  );

  console.log("Press CTRL-C to stop\n");
});

module.exports = app;
