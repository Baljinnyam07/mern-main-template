import express, { Express, Request, Response } from "express";

const app: Express = express();

app.get("/", (req: Request, res: Response) => {
  res.json("Hello world!");
});

app.get("/hello", (req: Request, res: Response) => {
  res.json("Hello world! again");
});

export default app;
