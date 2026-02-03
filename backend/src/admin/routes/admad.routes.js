import express from "express";
import { getAllAdMad, getAdMadById } from "../controllers/admad.controller.js";
const router = express.Router();

router.get("/", getAllAdMad);
router.get("/:id", getAdMadById);

export default router;