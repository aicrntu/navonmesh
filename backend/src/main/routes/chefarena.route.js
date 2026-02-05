import express from "express";

import { submitChefArena } from "../controllers/chefarena.controller.js";
import { validateChefArena } from "../validators/chefarena.validator.js";
import upload from "../../middlewares/upload.middleware.js";

const router = express.Router();

router.post("/chefarena", upload.single("paymentScreenshot"), validateChefArena, submitChefArena);

export default router;
