import express from "express";

import { submitAdMad } from "../controllers/admad.controller.js";
import upload from "../../middlewares/upload.middleware.js";

const router = express.Router();

router.post("/admad", upload.fields([{ name: 'video', maxCount: 1 }, { name: 'paymentScreenshot', maxCount: 1 }]), submitAdMad);

export default router;