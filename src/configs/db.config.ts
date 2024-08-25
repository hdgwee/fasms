import dotenv from "dotenv"
import { Dialect } from "sequelize"

dotenv.config()

class DbConfig {
  HOST: string = ""
  DB: string = ""
  USER: string = ""
  PASSWORD: string = ""
  PORT: number = 3307
  DIALECT: Dialect = "mysql"
}

const dbConfig: DbConfig = {
  HOST: process.env.MYSQLDB_HOST!,
  DB: process.env.MYSQLDB_DATABASE!,
  USER: process.env.MYSQLDB_USER!,
  PASSWORD: process.env.MYSQLDB_ROOT_PASSWORD!,
  PORT: Number(process.env.MYSQLDB_LOCAL_PORT),
  DIALECT: "mysql",
}

export default dbConfig
