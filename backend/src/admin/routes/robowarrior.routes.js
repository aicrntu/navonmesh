import express from "express";
import { getAllRobo, getRoboById } from "../controllers/robowarrior.controller.js";
const router = express.Router();

router.get("/", getAllRobo);
router.get("/:id", getRoboById);

export default router;