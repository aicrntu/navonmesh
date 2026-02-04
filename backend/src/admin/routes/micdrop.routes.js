import express from "express";
import { getAllMicDrop, getMicDropById } from "../controllers/micdrop.controller.js";

const router = express.Router();

router.get("/", getAllMicDrop);
router.get("/:id", getMicDropById);

export default router;
