import { Model, Optional } from "sequelize"

export interface Application {
  id: string
  applicantId: string
  schemeId: string
}

export interface ApplicationCreationAttributes
  extends Optional<Application, "id"> {}

export interface ApplicationInstance
  extends Model<Application, ApplicationCreationAttributes>,
    Application {
  createdAt?: Date
  updatedAt?: Date
}
