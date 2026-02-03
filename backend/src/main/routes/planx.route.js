import express from "express";

import { submitPlanxForm } from "../controllers/planx.controller.js";
import { validatePlanx } from "../validators/planx.validator.js";
import upload from "../../middlewares/upload.middleware.js";

const router = express.Router();

router.post("/planx", upload.single("presentation"), validatePlanx, submitPlanxForm);

export default router;