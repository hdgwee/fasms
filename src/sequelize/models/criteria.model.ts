import { Sequelize } from "sequelize"
import DataTypes from "sequelize"
import { CriteriaInstance } from "../../models/criteria"

export default (sequelize: Sequelize) => {
  const model = sequelize.define<CriteriaInstance>(
    "criteria",
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.STRING,
        unique: true,
      },
      schemeId: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      value: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      parentId: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    },
    {
      tableName: "criteria",
    },
  )

  return model
}
