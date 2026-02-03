import express from "express";

import { submitInnomaker } from "../controllers/innomaker.controller.js";
import { validateInnomaker } from "../validators/innomaker.validator.js";
import upload from "../../middlewares/upload.middleware.js";

const router = express.Router();

router.post("/innomaker", upload.single("project"), validateInnomaker, submitInnomaker);

export default router;