import { Sequelize } from "sequelize"
import DataTypes from "sequelize"
import { ApplicantInstance } from "../../models/applicant"

export default (sequelize: Sequelize) => {
  const model = sequelize.define<ApplicantInstance>(
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
