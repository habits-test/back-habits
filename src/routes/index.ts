import { signup, login, logout, checkAuth } from "../controllers/users_controller";
import { createHabit } from "../controllers/habits_controller";
import {requireAuth} from "../middleware/requireAuth"
import { app } from "../app";

export const usersRoutes = (): void => {
    app.post("/signup", signup);
    app.post("/signin", login);
    app.get("/logout", logout);
    app.get("/check-auth", requireAuth, checkAuth);
}


export const habitsRoutes = (): void => {
    app.post("/habits", requireAuth, createHabit)
}