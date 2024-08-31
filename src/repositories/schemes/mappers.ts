import { DetailedSchemeDao } from "../../sequelize/models/scheme.models"
import { Scheme } from "../../models/scheme"
import { Criteria } from "../../models/criteria"
import { Benefit } from "../../models/benefit"
import { CriteriaDao } from "../../sequelize/models/criteria.model"
import { BenefitDao } from "../../sequelize/models/benefit.model"

export function mapFromDao(
  detailedSchemeDaoList: DetailedSchemeDao[],
): Scheme[] {
  const schemes: Scheme[] = []

  for (const detailedSchemeDao of detailedSchemeDaoList) {
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

function mapFromCriteriaDao(criteriaDaoList: CriteriaDao[]): Criteria[] {
  const criteriaList: Criteria[] = []

  for (const criteriaDao of criteriaDaoList) {
    const critieria = new Criteria(
      criteriaDao.id,
      criteriaDao.name,
      criteriaDao.value,
      criteriaDao.parentId,
    )
    criteriaList.push(critieria)
  }

  return criteriaList
}

function mapFromBenefitDao(benefitDaoList: BenefitDao[]): Benefit[] {
  const benefits: Benefit[] = []

  for (const benefitDao of benefitDaoList) {
    const benefit = new Benefit(
      benefitDao.id,
      benefitDao.name,
      benefitDao.amount,
    )
    benefits.push(benefit)
  }

  return benefits
}
