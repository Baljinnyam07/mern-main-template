import express, { Express, Request, Response } from "express";
import usersRouter from "./routes/usersRouter";

const app: Express = express();

app.get("/", (req: Request, res: Response) => {
  res.json("Hello world!");
});

app.use("/api/users", usersRouter);

export default app;
