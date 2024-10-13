import { sequelize } from "../../sequelize"
import { v4 as uuidv4 } from "uuid"
import { mapFromDao, mapFromDaoArray } from "./mappers"
import { ApplicationDao } from "../../sequelize/models/application.model"

export async function create(applicantId: string, schemeId: string) {
  const existingApplication = await get(applicantId, schemeId)

  if (existingApplication === null) {
    await sequelize.models.application.create({
      id: uuidv4(),
      applicantId: applicantId,
      schemeId: schemeId,
    })
  }
}

export async function get(applicantId: string, schemeId: string) {
  const applicationDao = await sequelize.models.application.findOne({
    where: { applicantId: applicantId, schemeId: schemeId },
  })

  if (applicationDao !== null) {
    mapFromDao(applicationDao as ApplicationDao)
  }

  return null
}

export async function getAll() {
  const applicationDaoArray = await sequelize.models.application.findAll()

  return mapFromDaoArray(applicationDaoArray as ApplicationDao[])
}
