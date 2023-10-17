import express, { Router } from "express";

import {
  getGeneralInfo,
  login,
  registerGeneralInfo,
} from "../controller/generalInfo";
const router: Router = express.Router();

router.post("/", registerGeneralInfo);
router.get("/", getGeneralInfo);
router.post("/login", login);
export default router;
