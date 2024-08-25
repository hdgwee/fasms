import { Model, Optional } from "sequelize"
import { Criteria } from "./criteria"
import { Benefit } from "./benefit"

export interface Scheme {
  id: string
  name: string
  criteria: Criteria[]
  benefits: Benefit[]
}

interface SchemeDb {
  id: string
  name: string
}

export interface SchemeDbCreationAttributes extends Optional<SchemeDb, "id"> {}

export interface SchemeDbInstance
  extends Model<SchemeDb, SchemeDbCreationAttributes>,
    SchemeDb {
  createdAt?: Date
  updatedAt?: Date
}
