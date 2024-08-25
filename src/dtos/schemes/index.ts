import { Benefit } from "../../models/benefit"
import { Criteria } from "../../models/criteria"
import { Scheme } from "../../models/scheme"
import { BenefitDto, SchemeDto } from "./dtos"

export function mapSchemeDto(schemes: Scheme[]): SchemeDto[] {
  const schemeDtos: SchemeDto[] = []

  schemes.map((scheme) => {
    schemeDtos.push({
      id: scheme.id,
      name: scheme.name,
      criteria: mapCriteriaDto(scheme.criteria),
      benefits: mapBenefitsDto(scheme.benefits),
    })
  })

  return schemeDtos
}

function mapCriteriaDto(criteria: Criteria[]): unknown[] {
  const criteriaDtos: unknown[] = []

  // TODO: Improve this to support more than two layers of nesting.
  for (const curCriteria of criteria) {
    if (curCriteria.parentId === "") {
      let newCriteria = null

      for (const childCriteria of criteria) {
        if (childCriteria.parentId === curCriteria.id) {
          newCriteria = {
            [curCriteria.name]: {
              [childCriteria.name]: childCriteria.value,
            },
          }
        }
      }

      if (!newCriteria) {
        newCriteria = {
          [curCriteria.name]: curCriteria.value,
        }
      }

      criteriaDtos.push(newCriteria)
    }
  }

  return criteriaDtos
}

function mapBenefitsDto(benefits: Benefit[]): BenefitDto[] {
  const benefitDtos: BenefitDto[] = []

  benefits.map((benefit) => {
    benefitDtos.push({
      id: benefit.id,
      name: benefit.name,
      amount: benefit.amount,
    })
  })

  return benefitDtos
}
