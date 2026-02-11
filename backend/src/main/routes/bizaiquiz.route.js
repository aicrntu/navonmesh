import express from "express";

import { submitBizaiQuiz } from "../controllers/bizaiquiz.controller.js";
import { validateBizaiQuiz } from "../validators/bizaiquiz.validator.js";
import upload from "../../middlewares/upload.middleware.js";

const router = express.Router();

router.post("/bizaiquiz", upload.none(), validateBizaiQuiz, submitBizaiQuiz);

export default router;
