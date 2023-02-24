import express, {Express, Request, Response} from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes/router"

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use("/routes", router);

app.get('/', (req: Request, res: Response) => {
    res.send("Express + Typescript");
});

app.listen(port, () => {
    console.log("...");
    
})