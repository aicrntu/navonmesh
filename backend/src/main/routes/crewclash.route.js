import express from "express";

import { submitCrewClash } from "../controllers/crewclash.controller.js";
import { validateCrewClash } from "../validators/crewclash.validator.js";
import upload from "../../middlewares/upload.middleware.js";

const router = express.Router();

router.post("/crewclash", upload.single("video"), validateCrewClash, submitCrewClash);

export default router;
