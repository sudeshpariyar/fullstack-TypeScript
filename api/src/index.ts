import express, { Express, Request, Response } from "express";
import bodyParser from "body-parser";
import "dotenv/config";
import cors from "cors";

import { AppDataSource } from "./database";
import generalInfoRouter from "./routes/generalInfo";

const app: Express = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/generalinfo", generalInfoRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome on the Typescript server!");
});

AppDataSource.initialize()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("listening on express application");
    });
  })
  .catch((err) => {
    console.log("Error: " + err);
  });
