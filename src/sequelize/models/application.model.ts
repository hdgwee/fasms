import { Sequelize } from "sequelize"
import DataTypes from "sequelize"
import { ApplicationInstance } from "../../models/application"

export default (sequelize: Sequelize) => {
  const model = sequelize.define<ApplicationInstance>(
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
