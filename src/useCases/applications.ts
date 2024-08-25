import sequelize from "../sequelize"
import ApplicationSequelizer from "../sequelize/models/application.model"
import { getAllEligible } from "./scheme"
import { v4 as uuidv4 } from "uuid"

export async function create(applicantId: string) {
  const eligibleSchemes = await getAllEligible(applicantId)

  for (const eligibleScheme of eligibleSchemes) {
    const schemeId = eligibleScheme.id
    const existingApplication = await get(applicantId, schemeId)

    if (existingApplication == null) {
      await ApplicationSequelizer(sequelize).create({
        id: uuidv4(),
        applicantId: applicantId,
        schemeId: schemeId,
      })
    }
  }
}

export async function get(applicantId: string, schemeId: string) {
  const application = ApplicationSequelizer(sequelize).findOne({
    where: { applicantId: applicantId, schemeId: schemeId },
  })

  return application
}

export async function getAll() {
  const applications = await ApplicationSequelizer(sequelize).findAll({
    raw: true,
  })

  return applications
}
