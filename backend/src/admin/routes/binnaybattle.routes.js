import express from "express";
import { getAllBinarryBattle, getBinarryBattleById } from "../controllers/binnaybattle.controller.js";

const router = express.Router();

router.get("/", getAllBinarryBattle);
router.get("/:id", getBinarryBattleById);

export default router;
