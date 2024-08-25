import sequelize from "../sequelize"
import SchemeSequelizer from "../sequelize/models/scheme.model"
import { Scheme, SchemeDbInstance } from "../models/scheme"
import CriteriaSequelizer from "../sequelize/models/criteria.model"
import { Criteria } from "../models/criteria"
import { CriteriaInstance } from "../models/criteria"
import BenefitSequelizer from "../sequelize/models/benefit.model"
import { Benefit } from "../models/benefit"
import { BenefitInstance } from "../models/benefit"
import { get as getApplicant } from "./applicants"
import { Applicant } from "../models/applicant"

export async function get(ids: string[]) {
  const schemes = await SchemeSequelizer(sequelize).findAll({
    where: { id: ids },
    raw: true,
  })
  return populateScheme(schemes)
}

export async function getAll() {
  const schemes = await SchemeSequelizer(sequelize).findAll({ raw: true })
  return populateScheme(schemes)
}

async function populateScheme(schemes: SchemeDbInstance[]) {
  const completeSchemes: Scheme[] = []
  for (const scheme of schemes) {
    const schemeId = scheme.id

    const completeScheme: Scheme = {
      id: scheme.id,
      name: scheme.name,
      criteria: [],
      benefits: [],
    }

    const criteria = await CriteriaSequelizer(sequelize).findAll({
      where: { schemeId: schemeId },
      raw: true,
    })
    completeScheme.criteria = mapCritieria(criteria)

    const benefits = await BenefitSequelizer(sequelize).findAll({
      where: { schemeId: schemeId },
      raw: true,
    })
    completeScheme.benefits = mapBenefits(benefits)

    completeSchemes.push(completeScheme)
  }

  return completeSchemes
}

function mapCritieria(critieriaInstances: CriteriaInstance[]): Criteria[] {
  const criteria: Criteria[] = []

  for (const curCriteria of critieriaInstances) {
    criteria.push({
      id: curCriteria.id,
      schemeId: curCriteria.schemeId,
      name: curCriteria.name,
      value: curCriteria.value,
      parentId: curCriteria.parentId,
    })
  }

  return criteria
}

function mapBenefits(benefitInstances: BenefitInstance[]): Benefit[] {
  const benefits: Benefit[] = []

  for (const benefitInstance of benefitInstances) {
    benefits.push({
      id: benefitInstance.id,
      schemeId: benefitInstance.schemeId,
      name: benefitInstance.name,
      amount: benefitInstance.amount,
    })
  }

  return benefits
}

export async function getAllEligible(applicantId: string) {
  const schemes = await getAll()
  const applicant = await getApplicant(applicantId)
  const eligibleScheme: Scheme[] = []

  for (const scheme of schemes) {
    if (applicant != null && checkEligibility(scheme, applicant)) {
      eligibleScheme.push(scheme)
    }
  }

  return eligibleScheme
}

function checkEligibility(scheme: Scheme, applicant: Applicant): boolean {
  // TODO: Implementation
  return true
}
