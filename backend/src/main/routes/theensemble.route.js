import express from "express";

import { submitTheEnsemble } from "../controllers/theensemble.controller.js";
import { validateTheEnsemble } from "../validators/theensemble.validator.js";
import upload from "../../middlewares/upload.middleware.js";

const router = express.Router();

router.post("/theensemble", upload.single("video"), validateTheEnsemble, submitTheEnsemble);

export default router;
