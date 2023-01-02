import express, {Request, Response} from "express";
import cors from 'cors';
const cookieParser = require("cookie-parser");
import {connectToDB } from './models'
import User from "./models/user";
import { signup, login, logout, checkAuth } from "./controllers/users_controller";
import {requireAuth} from "./middleware/requireAuth"

connectToDB()
User.sync({alter: true})

const app = express();
app.use(express.json())
app.use(cors({ origin: true, credentials: true }));
app.use(cookieParser());


// Routing
app.get("/",(req: Request, res: Response) => {
    return res.json({
        hello: "Worldd !!"
    })
})

app.post("/signup", signup);
app.post("/signin", login);
app.get("/logout", logout);

app.get("/check-auth", requireAuth, checkAuth);



app.listen(4000)