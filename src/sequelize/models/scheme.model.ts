import { Sequelize } from "sequelize"
import DataTypes from "sequelize"
import { SchemeDbInstance } from "../../models/scheme"

export default (sequelize: Sequelize) => {
  const model = sequelize.define<SchemeDbInstance>(
    "scheme",
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.STRING,
        unique: true,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    },
    {
      tableName: "schemes",
    },
  )

  return model
}
