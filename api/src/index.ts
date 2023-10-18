import express, { Express, Request, Response } from "express";
import bodyParser from "body-parser";
import "dotenv/config";
import cors from "cors";

import { AppDataSource } from "./database";
import generalInfoRouter from "./routes/generalInfo";
import userRouter from "./routes/user";

const app: Express = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/api/generalinfo", generalInfoRouter);
app.use("/api/user", userRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome on the Typescript server!");
});

AppDataSource.initialize()
  .then(() => {
    app.listen(process.env.PORT || 4000, () => {
      console.log("listening on express application");
    });
  })
  .catch((err) => {
    console.log("Error: " + err);
  });
