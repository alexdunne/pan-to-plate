import { Application, Request, Response } from 'express';

export class Routes {
  static map(app: Application): void {
    app.get("/", (req: Request, res: Response) => {
      res.send("Hello world!");
    });
  }
}