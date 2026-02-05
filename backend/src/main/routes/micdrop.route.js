import express from "express";

import { submitMicDrop } from "../controllers/micdrop.controller.js";
import { validateMicDrop } from "../validators/micdrop.validator.js";
import upload from "../../middlewares/upload.middleware.js";

const router = express.Router();

router.post("/micdrop", upload.fields([{ name: 'video', maxCount: 1 }, { name: 'paymentScreenshot', maxCount: 1 }]), validateMicDrop, submitMicDrop);

export default router;
