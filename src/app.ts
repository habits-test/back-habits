import express, {Request, Response} from "express";
import cors from 'cors';

const app = express();
app.use(express.json())
app.use(cors({ origin: true, credentials: true }));

app.get("/",(req: Request, res: Response) => {
    return res.json({
        hello: "World !!"
    })
})




app.listen(4000)