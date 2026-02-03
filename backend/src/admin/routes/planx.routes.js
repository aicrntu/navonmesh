import express from "express";
import { getAllPlanx, getPlanxById } from "../controllers/planx.controller.js";

const router = express.Router();

router.get("/", getAllPlanx);
router.get("/:id", getPlanxById);

export default router;