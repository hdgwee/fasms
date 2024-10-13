import { getSchemes, getAllSchemes } from "../repositories/schemes"
import { get as getApplicant } from "./applicants"
import { Applicant } from "../models/applicant"
import { Scheme } from "../models/scheme"

export async function get(ids: string[]) {
  return await getSchemes(ids)
}

export async function getAll() {
  return await getAllSchemes()
}

export async function getAllEligible(applicantId: string) {
  const applicant = await getApplicant(applicantId)
  if (applicant === null) {
    return []
  }

  const schemes = await getAll()
  const eligibleScheme: Scheme[] = []
  for (const scheme of schemes) {
    if (checkEligibility(scheme, applicant)) {
      eligibleScheme.push(scheme)
    }
  }

  return eligibleScheme
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function checkEligibility(scheme: Scheme, applicant: Applicant): boolean {
  // TODO: Implementation
  return true
}
