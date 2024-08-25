import { Request, Response } from "express-serve-static-core"
import { get as getApplicant } from "../useCases/applicants"
import {
  create as createApplication,
  getAll as getAllApplication,
} from "../useCases/applications"
import { get as getSchemes } from "../useCases/scheme"
import { mapApplicantDto } from "../dtos/applicants"
import { mapSchemeDto } from "../dtos/schemes"

export function create(
  request: Request<{}, {}, { applicantId: string }, {}>,
  response: Response,
) {
  const { applicantId } = request.body
  getApplicant(applicantId).then((applicant) => {
    if (applicant == null) {
      response.status(400).send("Applicant not found")
    } else {
      createApplication(applicantId).then(() => {
        response.sendStatus(200)
      })
    }
  })
}

export function getAll(_: Request, response: Response) {
  getAllApplication().then((applications) => {
    if (applications.length === 0) {
      response.send({ application: {} })
    } else {
      const applicantId = applications[0].applicantId

      getApplicant(applicantId).then((applicant) => {
        if (applicant == null) {
          response.sendStatus(400)
        } else {
          const schemeIds: string[] = []
          for (const application of applications) {
            schemeIds.push(application.schemeId)
          }

          getSchemes(schemeIds).then((schemes) => {
            response.send({
              application: {
                applicant: mapApplicantDto(applicant!),
                schemes: mapSchemeDto(schemes),
              },
            })
          })
        }
      })
    }
  })
}
