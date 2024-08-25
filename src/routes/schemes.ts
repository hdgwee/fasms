import express from "express"
import { getAll, getAllEligible } from "../handlers/schemes"

const router = express.Router()

router.get("/api/schemes", getAll)
router.get("/api/schemes/eligible", getAllEligible)

export default router
