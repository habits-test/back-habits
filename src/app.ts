import express, { Application } from "express";
import cors from "cors";
const cookieParser = require("cookie-parser");
import { connectToDB } from "./models";
import User from "./models/user";
import Habit from "./models/habit";
import { routes } from "./routes";

connectToDB();
User.sync({ alter: true });
Habit.sync({ alter: true });

const app: Application = express();
app.use(express.json());
app.use(cors({ origin: true, credentials: true }));
app.use(cookieParser());

// Routing
routes(app);

app.listen(4000, () => {
  console.log("Server running on port 4000");
});
