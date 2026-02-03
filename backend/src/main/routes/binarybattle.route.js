import express from "express";

import upload from "../../middlewares/upload.middleware.js";
import { submitBinarybattle } from "../controllers/binarybattle.controller.js";
import { validateBinarybattle } from "../validators/binarybattle.validator.js";

const router = express.Router();

router.post("/binarybattle", upload.single("project"), validateBinarybattle, submitBinarybattle);

export default router;
