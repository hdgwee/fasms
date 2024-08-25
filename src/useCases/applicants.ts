import sequelize from "../sequelize"
import { Applicant } from "../models/applicant"
import ApplicantSequelizer from "../sequelize/models/applicant.model"

export async function create(applicant: Applicant) {
  // TODO: Validate applicant before inserting

  const existingApplicant = await ApplicantSequelizer(sequelize).findOne({
    where: { id: applicant.id },
  })
  if (existingApplicant) {
    await ApplicantSequelizer(sequelize).update(applicant, {
      where: { id: applicant.id },
    })
  } else {
    await ApplicantSequelizer(sequelize).create(applicant)
  }
}

export async function get(id: string) {
  const applicantInstance = await ApplicantSequelizer(sequelize).findOne({
    where: { id: id },
    raw: true,
  })

  if (applicantInstance) {
    const applicant: Applicant = {
      id: applicantInstance.id,
      name: applicantInstance.name,
      employmentStatus: applicantInstance.employmentStatus,
      sex: applicantInstance.sex,
      dateOfBirth: applicantInstance.dateOfBirth,
      underTheSameHouseholdOf: applicantInstance.underTheSameHouseholdOf,
      relationship: applicantInstance.relationship,
    }

    return applicant
  } else {
    return null
  }
}

export async function getAll() {
  const applicants = await ApplicantSequelizer(sequelize).findAll({
    raw: true,
  })

  return applicants
}
