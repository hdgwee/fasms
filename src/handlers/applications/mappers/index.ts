import { ApplicantDto, SubApplicantDto, BenefitDto, SchemeDto } from "./dto"
import { Applicant } from "../../../models/applicant"
import { Benefit } from "../../../models/benefit"
import { Criteria } from "../../../models/criteria"
import { Scheme } from "../../../models/scheme"

export function mapApplicantDto(applicant: Applicant): ApplicantDto {
  let applicantDto = new ApplicantDto("", "", "", "", "", [])

  const subApplicants: Applicant[] = []

  const isNotSubApplicant = applicant.relationship === ""
  if (isNotSubApplicant) {
    applicantDto = mapApplicantOnlyDto(applicant)
  } else {
    subApplicants.push(applicant)
  }

  subApplicants.forEach((subApplicant) => {
    if (subApplicant.underTheSameHouseholdOf !== "") {
      const subApplicantDto = mapSubApplicantOnlyDto(subApplicant)
      applicantDto.household.push(subApplicantDto)
    }
  })

  return applicantDto
}

function mapApplicantOnlyDto(applicant: Applicant) {
  return new ApplicantDto(
    applicant.id,
    applicant.name,
    applicant.employmentStatus,
    applicant.sex,
    applicant.dateOfBirth.toString(),
    [],
  )
}

function mapSubApplicantOnlyDto(subApplicant: Applicant) {
  return new SubApplicantDto(
    subApplicant.id,
    subApplicant.name,
    subApplicant.employmentStatus,
    subApplicant.sex,
    subApplicant.dateOfBirth.toString(),
    subApplicant.relationship,
  )
}

export function mapSubApplicant(
  subApplicantDto: SubApplicantDto,
  mainApplicantId: string,
): Applicant {
  return {
    id: subApplicantDto.id,
    name: subApplicantDto.name,
    employmentStatus: subApplicantDto.employment_status,
    sex: subApplicantDto.sex,
    dateOfBirth: new Date(subApplicantDto.date_of_birth),
    underTheSameHouseholdOf: mainApplicantId,
    relationship: subApplicantDto.relation,
  }
}

export function mapSchemeDto(schemes: Scheme[]): SchemeDto[] {
  const schemeDtos: SchemeDto[] = []

  schemes.forEach((scheme) => {
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

  benefits.forEach((benefit) => {
    benefitDtos.push({
      id: benefit.id,
      name: benefit.name,
      amount: benefit.amount,
    })
  })

  return benefitDtos
}
