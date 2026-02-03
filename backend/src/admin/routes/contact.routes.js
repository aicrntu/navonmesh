import express from "express";
import {
  getAllContact,
  getContactById,
} from "../controllers/contact.controller.js";

const router = express.Router();

router.get("/", getAllContact);
router.get("/:id", getContactById);

export default router;