import express from "express"
import { create, getAll } from "../handlers/applications"

const router = express.Router()

router.get("/api/applications", getAll)
router.post("/api/applications", create)

export default router
