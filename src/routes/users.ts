import express from "express"
import { login } from "../handlers/users"

const router = express.Router()

router.post("/login", login)

export default router
