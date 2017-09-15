import * as express from 'express';
import { Request, Response } from 'express';

import { GraphQLRoutes, Routes } from './routes';

const app = express();

/**
 * Express config
 */
app.set("port", process.env.PORT || 3000);


Routes.map(app);
GraphQLRoutes.map(app);

app.listen(app.get("port"), () => {
  console.log(("App is running at http://localhost:%d in %s mode"), app.get("port"), app.get("env"));
  console.log("Press CTRL-C to stop\n");
});

module.exports = app;