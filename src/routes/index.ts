import { Application, Request, Response } from "express";
import { usersRoutes } from "./usersRoutes";
import { habitsRoutes } from "./habitsRoutes";

export const routes = (app: Application) => {
  app.get("/", (req: Request, res: Response) => {
    return res.json({
      hello: "Worldd !!",
    });
  });

  usersRoutes(app);
  habitsRoutes(app);
};
