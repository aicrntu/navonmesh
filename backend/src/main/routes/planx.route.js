import express from "express";

import { submitPlanxForm } from "../controllers/planx.controller.js";
import { validatePlanx } from "../validators/planx.validator.js";
import upload from "../../middlewares/upload.middleware.js";

const router = express.Router();

router.post("/planx", upload.fields([{ name: 'presentation', maxCount: 1 }, { name: 'paymentScreenshot', maxCount: 1 }]), validatePlanx, submitPlanxForm);

export default router;