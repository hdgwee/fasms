import { Sequelize, Model, Optional } from "sequelize"
import DataTypes from "sequelize"
import { Criteria } from "../../models/criteria"

export interface CriteriaCreationAttributes extends Optional<Criteria, "id"> {}

export interface CriteriaDao
  extends Model<Criteria, CriteriaCreationAttributes>,
    Criteria {
  createdAt?: Date
  updatedAt?: Date
}

export default (sequelize: Sequelize) => {
  const model = sequelize.define<CriteriaDao>(
    "criteria",
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
