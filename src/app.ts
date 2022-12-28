import express, {Request, Response} from "express";


const app = express();

app.use(express.json())

app.get("/",(req: Request, res: Response) => {
    return res.send("hello world")
})



app.post("/post",(req: Request, res: Response) => {
    console.log(req.body)

    return res.sendStatus(200)
})


app.listen(4000)