import { Sequelize, Model, Optional } from "sequelize"
import DataTypes from "sequelize"
import { Application } from "../../models/application"

export interface ApplicationCreationAttributes
  extends Optional<Application, "id"> {}

export interface ApplicationDao
  extends Model<Application, ApplicationCreationAttributes>,
    Application {
  createdAt?: Date
  updatedAt?: Date
}

export default (sequelize: Sequelize) => {
  const model = sequelize.define<ApplicationDao>(
    "application",
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.STRING,
        unique: true,
      },
      applicantId: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      schemeId: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    },
    {
      tableName: "applications",
    },
  )

  return model
}
