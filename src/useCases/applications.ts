import { getAllEligible } from "./scheme"
import {
  create as createApplication,
  get as getApplication,
  getAll as getAllApplications,
} from "../repositories/applications"

export async function create(applicantId: string) {
  const eligibleSchemes = await getAllEligible(applicantId)

  for (const eligibleScheme of eligibleSchemes) {
    await createApplication(applicantId, eligibleScheme.id)
  }
}

export async function get(applicantId: string, schemeId: string) {
  const application = await getApplication(applicantId, schemeId)

  return application
}

export async function getAll() {
  return await getAllApplications()
}
