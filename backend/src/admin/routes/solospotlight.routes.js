import express from "express";
import { getAllSoloSpotlight, getSoloSpotlightById } from "../controllers/solospotlight.controller.js";

const router = express.Router();

router.get("/", getAllSoloSpotlight);
router.get("/:id", getSoloSpotlightById);

export default router;
