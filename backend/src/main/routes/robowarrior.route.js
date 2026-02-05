import { submitRoboWarrior } from "../controllers/robowarrior.controller.js";
import { validateRoboWarrior } from "../validators/robowarrior.validator.js";
import upload from "../../middlewares/upload.middleware.js";
import express from "express";

const router = express.Router();

router.post(
    "/robowarrior",
    upload.fields([{ name: 'presentation', maxCount: 1 }, { name: 'paymentScreenshot', maxCount: 1 }]),
    validateRoboWarrior,
    submitRoboWarrior,
);

export default router;