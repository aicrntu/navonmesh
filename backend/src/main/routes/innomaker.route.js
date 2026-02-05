import express from "express";

import { submitInnomaker } from "../controllers/innomaker.controller.js";
import { validateInnomaker } from "../validators/innomaker.validator.js";
import upload from "../../middlewares/upload.middleware.js";

const router = express.Router();

router.post(
    "/innomaker",
    upload.fields([{ name: 'project', maxCount: 1 }, { name: 'paymentScreenshot', maxCount: 1 }]),
    validateInnomaker,
    submitInnomaker,
);

export default router;