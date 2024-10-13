import DataTypes, { Sequelize, Model, Optional } from "sequelize"
import { Applicant } from "../../models/applicant"

interface ApplicantCreationAttributes extends Optional<Applicant, "id"> {}

export interface ApplicantDao
  extends Model<Applicant, ApplicantCreationAttributes>,
    Applicant {
  createdAt?: Date
  updatedAt?: Date
}

export default (sequelize: Sequelize) => {
  const model = sequelize.define<ApplicantDao>(
    "applicant",
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
      employmentStatus: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      sex: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      dateOfBirth: {
        allowNull: false,
        type: DataTypes.DATEONLY,
      },
      underTheSameHouseholdOf: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      relationship: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    },
    {
      tableName: "applicants",
    },
  )

  return model
}
