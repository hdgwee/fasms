import { Applicant } from "../../models/applicant"
import { ApplicantDao } from "../../sequelize/models/applicant.model"

export function mapFromDaoArray(
  applicantDaoArray: ApplicantDao[],
): Applicant[] {
  const applicantArray: Applicant[] = []

  for (const applicantDao of applicantDaoArray) {
    const applicant = mapFromDao(applicantDao)

    applicantArray.push(applicant)
  }

  return applicantArray
}

export function mapFromDao(applicantDao: ApplicantDao): Applicant {
  return new Applicant(
    applicantDao.id,
    applicantDao.name,
    applicantDao.employmentStatus,
    applicantDao.sex,
    applicantDao.dateOfBirth,
    applicantDao.underTheSameHouseholdOf,
    applicantDao.relationship,
  )
}
