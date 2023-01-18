import { Application } from "express";
import {
  getHabits,
  createHabit,
  updateHabitProgress,
} from "../controllers/habits_controller";
import { requireAuth } from "../middleware/requireAuth";

export const habitsRoutes = (app: Application) => {
  app.put("/habits/:id", requireAuth, updateHabitProgress);
  app.post("/habits", requireAuth, createHabit);
  app.get("/habits", requireAuth, getHabits);
};
