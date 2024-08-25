import { Sequelize } from "sequelize"
import DataTypes from "sequelize"
import { BenefitInstance } from "../../models/benefit"

export default (sequelize: Sequelize) => {
  const model = sequelize.define<BenefitInstance>(
    "benefit",
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
      amount: {
        allowNull: false,
        type: DataTypes.DECIMAL,
      },
    },
    {
      tableName: "benefits",
    },
  )

  return model
}
