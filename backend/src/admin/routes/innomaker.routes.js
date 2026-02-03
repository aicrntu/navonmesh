import express from "express"
import { getAllInnomaker, getInnomakerById } from "../controllers/innomaker.controller.js";

const router = express.Router();

router.get("/", getAllInnomaker);
router.get("/:id", getInnomakerById);

export default router;