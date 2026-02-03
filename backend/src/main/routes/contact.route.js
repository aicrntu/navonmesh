import express from "express";

import { submitContact } from "../controllers/contact.controller.js";
import { validateContact } from "../validators/contact.validator.js";

const router = express.Router();

router.post("/contact", validateContact, submitContact);

export default router;
