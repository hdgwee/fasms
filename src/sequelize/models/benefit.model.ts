import { Sequelize, Model, Optional } from "sequelize"
import DataTypes from "sequelize"
import { Benefit } from "../../models/benefit"

export interface BenefitCreationAttributes extends Optional<Benefit, "id"> {}

export interface BenefitDao
  extends Model<Benefit, BenefitCreationAttributes>,
    Benefit {
  createdAt?: Date
  updatedAt?: Date
}

export default (sequelize: Sequelize) => {
  const model = sequelize.define<BenefitDao>(
    "benefit",
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
