import express from "express";

import { submitChefArena } from "../controllers/chefarena.controller.js";
import { validateChefArena } from "../validators/chefarena.validator.js";

const router = express.Router();

router.post("/chefarena", validateChefArena, submitChefArena);

export default router;
