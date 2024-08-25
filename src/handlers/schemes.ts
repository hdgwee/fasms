import { Request, Response } from "express-serve-static-core"
import {
  getAll as getAllSchemes,
  getAllEligible as getAllEligibleSchemes,
} from "../useCases/scheme"
import { mapSchemeDto } from "../dtos/schemes"

export function getAll(request: Request, response: Response) {
  getAllSchemes().then((allSchemes) => {
    response.send({ schemes: mapSchemeDto(allSchemes) })
  })
}

export function getAllEligible(
  request: Request<{}, {}, {}, { applicant: string }>,
  response: Response,
) {
  const applicantId = request.query.applicant
  getAllEligibleSchemes(applicantId).then((eligibleSchemes) => {
    response.send({ schemes: mapSchemeDto(eligibleSchemes) })
  })
}
