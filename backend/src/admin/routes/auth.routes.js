import express from "express";
import {
  adminLogin,
  createAdminController,
} from "../controllers/auth.controller.js";

import { validateCreateAdmin } from "../validators/admin.validator.js";

const router = express.Router();

router.post("/login", adminLogin);
router.post("/create", validateCreateAdmin, createAdminController);

export default router;
