import { DetailedSchemeDao } from "../../sequelize/models/scheme.models"
import { Scheme } from "../../models/scheme"
import { Criteria } from "../../models/criteria"
import { Benefit } from "../../models/benefit"
import { CriteriaDao } from "../../sequelize/models/criteria.model"
import { BenefitDao } from "../../sequelize/models/benefit.model"

export function mapFromDao(
  detailedSchemeDaoArray: DetailedSchemeDao[],
): Scheme[] {
  const schemes: Scheme[] = []

  for (const detailedSchemeDao of detailedSchemeDaoArray) {
    const scheme = new Scheme(
      detailedSchemeDao.id,
      detailedSchemeDao.name,
      mapFromCriteriaDao(detailedSchemeDao.criteria),
      mapFromBenefitDao(detailedSchemeDao.benefits),
    )
    schemes.push(scheme)
  }

  return schemes
}

function mapFromCriteriaDao(criteriaDaoArray: CriteriaDao[]): Criteria[] {
  const criteriaArray: Criteria[] = []

  for (const criteriaDao of criteriaDaoArray) {
    const critieria = new Criteria(
      criteriaDao.id,
      criteriaDao.name,
      criteriaDao.value,
      criteriaDao.parentId,
    )
    criteriaArray.push(critieria)
  }

  return criteriaArray
}

function mapFromBenefitDao(benefitDaoArray: BenefitDao[]): Benefit[] {
  const benefits: Benefit[] = []

  for (const benefitDao of benefitDaoArray) {
    const benefit = new Benefit(
      benefitDao.id,
      benefitDao.name,
      benefitDao.amount,
    )
    benefits.push(benefit)
  }

  return benefits
}
