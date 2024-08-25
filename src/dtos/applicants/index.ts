import { ApplicantDto, SubApplicantDto } from "./dto"
import { Applicant } from "../../models/applicant"

export function mapApplicant(applicantDto: ApplicantDto): Applicant {
  return {
    id: applicantDto.id,
    name: applicantDto.name,
    employmentStatus: applicantDto.employment_status,
    sex: applicantDto.sex,
    dateOfBirth: new Date(applicantDto.date_of_birth),
    underTheSameHouseholdOf: "",
    relationship: "",
  }
}

export function mapApplicantDto(applicant: Applicant): ApplicantDto {
  let applicantDto = new ApplicantDto("", "", "", "", "", [])

  const subApplicants: Applicant[] = []

  const isNotSubApplicant = applicant.relationship === ""
  if (isNotSubApplicant) {
    applicantDto = mapApplicantOnlyDto(applicant)
  } else {
    subApplicants.push(applicant)
  }

  subApplicants.map((subApplicant) => {
    if (subApplicant.underTheSameHouseholdOf !== "") {
      const subApplicantDto = mapSubApplicantOnlyDto(subApplicant)
      applicantDto.household.push(subApplicantDto)
    }
  })

  return applicantDto
}

export function mapApplicantDtos(applicants: Applicant[]): ApplicantDto[] {
  const applicantDtos: ApplicantDto[] = []
  const subApplicants: Applicant[] = []

  applicants.map((applicant) => {
    const isNotSubApplicant = applicant.relationship === ""
    if (isNotSubApplicant) {
      const applicantDto = mapApplicantOnlyDto(applicant)

      applicantDtos.push(applicantDto)
    } else {
      subApplicants.push(applicant)
    }
  })

  subApplicants.map((subApplicant) => {
    if (subApplicant.underTheSameHouseholdOf !== "") {
      const subApplicantDto = mapSubApplicantOnlyDto(subApplicant)

      applicantDtos.map((mainApplicant) => {
        if (mainApplicant.id === subApplicant.underTheSameHouseholdOf) {
          mainApplicant.household.push(subApplicantDto)
        }
      })
    }
  })

  return applicantDtos
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
