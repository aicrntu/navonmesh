import express from "express";
import { getAllBizaiQuiz, getBizaiQuizById } from "../controllers/bizaiquiz.controller.js";

const router = express.Router();

router.get("/", getAllBizaiQuiz);
router.get("/:id", getBizaiQuizById);

export default router;
