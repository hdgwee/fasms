import { Applicant } from "../models/applicant"
import {
  createApplicant,
  getApplicant,
  getAllApplicants,
} from "../repositories/applicants"

export async function create(applicant: Applicant) {
  // TODO: Validate applicant before inserting
  return createApplicant(applicant)
}

export async function get(id: string) {
  return getApplicant(id)
}

export async function getAll() {
  return getAllApplicants()
}
