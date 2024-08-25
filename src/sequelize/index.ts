import dbConfig from "../configs/db.config"
import { Sequelize } from "sequelize"
import applicant from "./models/applicant.model"
import application from "./models/application.model"
import benefit from "./models/benefit.model"
import criteria from "./models/criteria.model"
import scheme from "./models/scheme.model"
import user from "./models/user.model"

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.DIALECT,
  port: dbConfig.PORT,
})

const modelDefiners = [applicant, application, benefit, criteria, scheme, user]

for (const modelDefiner of modelDefiners) {
  modelDefiner(sequelize)
}

export default sequelize
