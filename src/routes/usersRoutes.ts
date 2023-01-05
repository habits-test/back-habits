import { Application } from "express";
import {
  signup,
  login,
  logout,
  checkAuth,
} from "../controllers/users_controller";
import { requireAuth } from "../middleware/requireAuth";

export const usersRoutes = (app: Application) => {
  app.post("/signup", signup);
  app.post("/signin", login);
  app.get("/logout", logout);
  app.get("/check-auth", requireAuth, checkAuth);
};
