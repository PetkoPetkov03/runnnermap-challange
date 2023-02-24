import express, { Router, Request, Response} from "express";
import * as client from '@prisma/client'

const router: Router = express.Router();

const prisma = new client.PrismaClient();

router.get("/home", (req: Request, res: Response) => {
    res.send("home");
});

export default router;