import { sequelize } from "../../sequelize"
import { Applicant } from "../../models/applicant"
import { mapFromDao, mapFromDaoList } from "./mappers"
import { ApplicantDao } from "../../sequelize/models/applicant.model"

export async function createApplicant(applicant: Applicant) {
  const applicantSeq = sequelize.models.applicant

  const existingApplicant = await applicantSeq.findOne({
    where: { id: applicant.id },
  })

  if (existingApplicant) {
    await applicantSeq.update(applicant, {
      where: { id: applicant.id },
    })
  } else {
    await applicantSeq.create({ ...applicant })
  }
}

export async function getApplicant(id: string) {
  const applicantDao = await sequelize.models.applicant.findOne({
    where: { id: id },
  })

  if (applicantDao) {
    return mapFromDao(applicantDao as ApplicantDao)
  } else {
    return null
  }
}

export async function getAllApplicants() {
  const applicants = await sequelize.models.applicant.findAll()

  return mapFromDaoList(applicants as ApplicantDao[])
}
