import * as Express from "express";

import { ServicesContext } from "./ServicesContext";

export class Context {
  constructor(private req: Express.Request, private res: Express.Response, private servicesContext: ServicesContext) {}

  public get response(): Express.Response {
    return this.res;
  }

  public get request(): Express.Request {
    return this.req;
  }

  public get services(): ServicesContext {
    return this.servicesContext;
  }
}
