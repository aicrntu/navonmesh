import express from "express";

import { submitTaleTellers } from "../controllers/taletellers.controller.js";
import { validateTaleTellers } from "../validators/taletellers.validator.js";
import upload from "../../middlewares/upload.middleware.js";

const router = express.Router();

router.post("/taletellers", upload.single("video"), validateTaleTellers, submitTaleTellers);

export default router;
