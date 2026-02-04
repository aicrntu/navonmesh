import express from "express";
import { getAllTaleTellers, getTaleTellersById } from "../controllers/taletellers.controller.js";

const router = express.Router();

router.get("/", getAllTaleTellers);
router.get("/:id", getTaleTellersById);

export default router;
