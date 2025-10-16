import express from "express"
import { projectController } from "../../controllers/index.js"

const router = express.Router()

router.post('/', projectController.createProjectController)

export default router