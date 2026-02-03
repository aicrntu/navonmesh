import express from "express";

import { submitMicDrop } from "../controllers/micdrop.controller.js";
import { validateMicDrop } from "../validators/micdrop.validator.js";
import upload from "../../middlewares/upload.middleware.js";

const router = express.Router();

router.post("/micdrop", upload.single("video"), validateMicDrop, submitMicDrop);

export default router;
