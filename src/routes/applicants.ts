import express from "express"
import { create, getAll } from "../handlers/applicants"

const router = express.Router()

router.get("/api/applicants", getAll)
router.post("/api/applicants", create)

export default router
