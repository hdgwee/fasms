import { Applicant } from "../../models/applicant"
import { ApplicantDao } from "../../sequelize/models/applicant.model"

export function mapFromDaoList(applicantDaoList: ApplicantDao[]): Applicant[] {
  const applicantList: Applicant[] = []

  for (const applicantDao of applicantDaoList) {
    const applicant = mapFromDao(applicantDao)

    applicantList.push(applicant)
  }

  return applicantList
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
