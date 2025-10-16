import express from "express";
import { infoController, projectController } from "../../controllers/index.js";

const router = express.Router();

router.get("/info", infoController.info);
router.post('/projects', projectController.createProjectController)

export default router;
