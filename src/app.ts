import express, {Request, Response} from "express";
import cors from 'cors';
const cookieParser = require("cookie-parser");
import {connectToDB } from './models'
import User from "./models/user";
import { usersRoutes } from "./routes";

connectToDB()
User.sync({alter: true})

export const app = express();
app.use(express.json())
app.use(cors({ origin: true, credentials: true }));
app.use(cookieParser());


// Routing
app.get("/",(req: Request, res: Response) => {
    return res.json({
        hello: "Worldd !!"
    })
})
usersRoutes()



app.listen(4000)