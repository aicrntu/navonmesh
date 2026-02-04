import express from "express";
import { getAllChefArena, getChefArenaById } from "../controllers/chefarena.controller.js";

const router = express.Router();

router.get("/", getAllChefArena);
router.get("/:id", getChefArenaById);

export default router;
