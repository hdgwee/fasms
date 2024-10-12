import dotenv from "dotenv"
import express from "express"
import bodyParser from "body-parser"
import { log as logRequest } from "./middlewares/requestLogger"
import { log as logResponse } from "./middlewares/responseLogger"
import corsMiddlewareOptions from "./middlewares/cors"
import { authenticate } from "./middlewares/authentication"
import cors from "cors"
import usersRouter from "./routes/users"
import applicantsRouter from "./routes/applicants"
import applicationsRouter from "./routes/applications"
import schemesRouter from "./routes/schemes"
import {
  ErrorRequestHandler,
  Request,
  Response,
  NextFunction,
} from "express-serve-static-core"
import { sequelize } from "./sequelize"
import { seed } from "./tests/databaseSeeder"

dotenv.config()

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json({ limit: "50mb" }))
app.use(logRequest)
app.use(logResponse)

const checkCors = cors(corsMiddlewareOptions)

app.use("/", checkCors, usersRouter)
app.use("/", checkCors, authenticate, applicantsRouter)
app.use("/", checkCors, authenticate, applicationsRouter)
app.use("/", checkCors, authenticate, schemesRouter)

app.use(function (
  err: ErrorRequestHandler,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  if (err) console.log(err)
  next()
})

seed(sequelize)

const PORT = process.env.NODE_DOCKER_PORT
app.listen(PORT)
