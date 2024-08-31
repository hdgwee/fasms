import { Sequelize, Model, Optional } from "sequelize"
import DataTypes from "sequelize"
import { CriteriaDao } from "./criteria.model"
import { BenefitDao } from "./benefit.model"

interface Scheme {
  id: string
  name: string
}

export interface SchemeDbCreationAttributes extends Optional<Scheme, "id"> {}

export interface SchemeDao
  extends Model<Scheme, SchemeDbCreationAttributes>,
    Scheme {
  createdAt?: Date
  updatedAt?: Date
}

export interface DetailedSchemeDao extends SchemeDao {
  criteria: CriteriaDao[]
  benefits: BenefitDao[]
}

export default (sequelize: Sequelize) => {
  const model = sequelize.define<SchemeDao>(
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

  model.belongsToMany(sequelize.models.benefit, {
    as: "benefits",
    through: "scheme_benefit",
  })

  model.belongsToMany(sequelize.models.criteria, {
    as: "criteria",
    through: "scheme_criteria",
  })

  return model
}
