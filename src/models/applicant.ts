import { Model, Optional } from "sequelize"

export interface Applicant {
  id: string
  name: string
  employmentStatus: string
  sex: string
  dateOfBirth: Date
  underTheSameHouseholdOf: string
  relationship: string
}

export interface ApplicantCreationAttributes
  extends Optional<Applicant, "id"> {}

export interface ApplicantInstance
  extends Model<Applicant, ApplicantCreationAttributes>,
    Applicant {
  createdAt?: Date
  updatedAt?: Date
}
