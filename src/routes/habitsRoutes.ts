import { Application } from "express";
import { getHabits, createHabit } from "../controllers/habits_controller";
import { requireAuth } from "../middleware/requireAuth";

export const habitsRoutes = (app: Application) => {
  app.post("/habits", requireAuth, createHabit);
  app.get("/habits", requireAuth, getHabits);
};
