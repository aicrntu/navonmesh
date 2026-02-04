import express from "express";
import { getAllCrewClash, getCrewClashById } from "../controllers/crewclash.controller.js";

const router = express.Router();

router.get("/", getAllCrewClash);
router.get("/:id", getCrewClashById);

export default router;
