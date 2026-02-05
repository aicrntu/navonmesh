import { submitControllerClash } from "../controllers/controllerclash.controller.js";
import { validateControllerClash } from "../validators/controllerclash.validator.js";
import upload from "../../middlewares/upload.middleware.js";
import express from "express";

const router = express.Router();

router.post("/controllerclash", upload.single("paymentScreenshot"), validateControllerClash, submitControllerClash);

export default router;
