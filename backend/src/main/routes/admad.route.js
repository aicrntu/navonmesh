import express from "express";

import { submitAdMad } from "../controllers/admad.controller.js";
import upload from "../../middlewares/upload.middleware.js";

const router = express.Router();

router.post("/admad", upload.single("video"), submitAdMad);

export default router;