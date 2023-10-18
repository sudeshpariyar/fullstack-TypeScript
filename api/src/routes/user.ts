import express from "express";
import { singleUser } from "../controller/user";

const router = express.Router();

router.get("/id/:id", singleUser);

export default router;
