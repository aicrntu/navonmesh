import express from "express";

import { submitSoloSpotlight } from "../controllers/solospotlight.controller.js";
import { validateSoloSpotlight } from "../validators/solospotlight.validator.js";
import upload from "../../middlewares/upload.middleware.js";

const router = express.Router();

router.post("/solospotlight", upload.fields([{ name: 'video', maxCount: 1 }, { name: 'paymentScreenshot', maxCount: 1 }]), validateSoloSpotlight, submitSoloSpotlight);

export default router;
