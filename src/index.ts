import dotenv from "dotenv"
import express from "express"
import bodyParser from "body-parser"
import corsMiddlewareOptions from "./middlewares/cors"
import { authenticate } from "./middlewares/authentication"
import cors from "cors"
import usersRouter from "./routes/users"
import applicantsRouter from "./routes/applicants"
import applicationsRouter from "./routes/applications"
import schemesRouter from "./routes/schemes"
import sequelize from "./sequelize"
import { v4 as uuidv4 } from "uuid"

dotenv.config()

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json({ limit: "50mb" }))

const checkCors = cors(corsMiddlewareOptions)

app.use("/", checkCors, usersRouter)
app.use("/", checkCors, authenticate, applicantsRouter)
app.use("/", checkCors, authenticate, applicationsRouter)
app.use("/", checkCors, authenticate, schemesRouter)

// TODO: Perform migration to prevent data loss
sequelize.sync({ force: true }).then(() => {
  seedDatabaseWithTestData()
})

const PORT = process.env.NODE_DOCKER_PORT
app.listen(PORT)

function seedDatabaseWithTestData() {
  sequelize.models.user.create({
    username: "username",
    password: "password",
    role: "System Administrator",
  })
  sequelize.models.scheme.create({
    id: "01913b89-9a43-7163-8757-01cc254783f3",
    name: "Retrenchment Assistance Scheme",
  })
  sequelize.models.criteria.create({
    id: uuidv4(),
    schemeId: "01913b89-9a43-7163-8757-01cc254783f3",
    name: "employment_status",
    value: "unemployed",
    parentId: "",
  })
  sequelize.models.benefit.create({
    id: "01913b8b-9b12-7d2c-a1fa-ea613b802ebc",
    schemeId: "01913b89-9a43-7163-8757-01cc254783f3",
    name: "SkillsFuture Credits",
    amount: 500.0,
  })
  sequelize.models.scheme.create({
    id: "01913b89-befc-7ae3-bb37-3079aa7f1be0",
    name: "Retrenchment Assistance Scheme (families)",
  })
  sequelize.models.criteria.create({
    id: uuidv4(),
    schemeId: "01913b89-befc-7ae3-bb37-3079aa7f1be0",
    name: "employment_status",
    value: "unemployed",
    parentId: "",
  })
  sequelize.models.criteria.create({
    id: "5d473b64-cb79-47e8-90ef-9d94e3858be5",
    schemeId: "01913b89-befc-7ae3-bb37-3079aa7f1be0",
    name: "has_children",
    value: "",
    parentId: "",
  })
  sequelize.models.criteria.create({
    id: uuidv4(),
    schemeId: "01913b89-befc-7ae3-bb37-3079aa7f1be0",
    name: "school_level",
    value: "== primary",
    parentId: "5d473b64-cb79-47e8-90ef-9d94e3858be5",
  })
}
