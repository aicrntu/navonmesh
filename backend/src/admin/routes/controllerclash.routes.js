import express from "express";
import { getAllControllerClash, getControllerClashById } from "../controllers/controllerclash.controller.js";
const router = express.Router();

router.get("/", getAllControllerClash);
router.get("/:id", getControllerClashById);

export default router;
