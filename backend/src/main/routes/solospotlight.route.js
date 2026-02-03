import express from "express";

import { submitSoloSpotlight } from "../controllers/solospotlight.controller.js";
import { validateSoloSpotlight } from "../validators/solospotlight.validator.js";
import upload from "../../middlewares/upload.middleware.js";

const router = express.Router();

router.post("/solospotlight", upload.single("video"), validateSoloSpotlight, submitSoloSpotlight);

export default router;
