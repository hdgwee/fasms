import { ApplicantDto } from "../applicants/dto"
import { SchemeDto } from "../schemes/dtos"

export class ApplicationDto {
  applicant: ApplicantDto
  schemes: SchemeDto[]

  constructor(applicant: ApplicantDto, schemes: SchemeDto[]) {
    this.applicant = applicant
    this.schemes = schemes
  }
}
