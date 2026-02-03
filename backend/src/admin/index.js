import express from "express";

import authRoutes from "./routes/auth.routes.js";
import planxRoutes from "./routes/planx.routes.js";
import innomakerRoutes from "./routes/innomaker.routes.js";
import robowarriorRoutes from "./routes/robowarrior.routes.js";
import admadRoutes from "./routes/admad.routes.js";
import contactRoutes from "./routes/contact.routes.js";
import binarrybattleRoutes from "./routes/binnaybattle.routes.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const router = express.Router();

// public
router.use("/auth", authRoutes);

// protected
router.use(authMiddleware);
router.use("/planx", planxRoutes);
router.use("/innomaker", innomakerRoutes);
router.use("/robo", robowarriorRoutes);
router.use("/contact", contactRoutes);
router.use("/admad", admadRoutes);
router.use("/binarrybattle", binarrybattleRoutes);

export default router;
