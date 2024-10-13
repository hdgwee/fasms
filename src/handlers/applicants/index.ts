import { Request, Response } from "express-serve-static-core"
import { ApplicantDto, SubApplicantDto } from "./mappers/dto"
import { CreateRequest } from "./models"
import {
  create as createApplicant,
  getAll as getAllApplicants,
} from "../../useCases/applicants"
import { mapApplicant, mapApplicantDtos, mapSubApplicant } from "./mappers"

export function create(
  request: Request<{}, {}, CreateRequest, {}>,
  response: Response,
) {
  const applicants = request.body.applicants

  applicants.forEach((applicantDto: ApplicantDto) => {
    // Create Applicant
    const applicant = mapApplicant(applicantDto)
    createApplicant(applicant)
    const mainApplicantId = applicant.id

    // Create "Sub"-Applicant (household members)
    const subApplicants = applicantDto.household
    subApplicants.forEach((subApplicantDto: SubApplicantDto) => {
      const subApplicant = mapSubApplicant(subApplicantDto, mainApplicantId)
      createApplicant(subApplicant)
    })
  })

  response.sendStatus(200)
}

export function getAll(_: Request, response: Response) {
  getAllApplicants().then((applicants) => {
    response.send({
      applicants: mapApplicantDtos(applicants),
    })
  })
}
