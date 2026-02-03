import express from "express";

import admadRoutes from "./routes/admad.route.js";
import planxRoutes from "./routes/planx.route.js";
import contactRoutes from "./routes/contact.route.js";
import innomakerRoutes from "./routes/innomaker.route.js";
import robowarriorRoutes from "./routes/robowarrior.route.js";
import binarybattleRoutes from "./routes/binarybattle.route.js";
import solospotlightRoutes from "./routes/solospotlight.route.js";

const router = express.Router();

router.use(admadRoutes);
router.use(planxRoutes);
router.use(contactRoutes);
router.use(innomakerRoutes);
router.use(robowarriorRoutes);
router.use(binarybattleRoutes);
router.use(solospotlightRoutes);

export default router;
