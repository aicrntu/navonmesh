import express from "express";
import { getAllTheEnsemble, getTheEnsembleById } from "../controllers/theensemble.controller.js";

const router = express.Router();

router.get("/", getAllTheEnsemble);
router.get("/:id", getTheEnsembleById);

export default router;
