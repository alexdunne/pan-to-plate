import * as Express from "express";

import { ServicesContext } from "./ServicesContext";

export class Context<A> {
  constructor(private request: Express.Request, private repsonse: Express.Response, private services: ServicesContext) {}

  public get Response(): Express.Response {
    return this.repsonse;
  }

  public get Request(): Express.Request {
    return this.request;
  }

  public get Services(): ServicesContext {
    return this.services;
  }
}
