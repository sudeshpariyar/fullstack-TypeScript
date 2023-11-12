import express from "express";
import { newPost } from "../controller/post";

const router = express.Router();

router.post("/id/:id/newpost", newPost);

export default router;
