import { Application } from "../../models/application"
import { ApplicationDao } from "../../sequelize/models/application.model"

export function mapFromDaoArray(
  applicationDaoArray: ApplicationDao[],
): Application[] {
  const applicationArray: Application[] = []

  for (const applicantDao of applicationDaoArray) {
    const applicant = mapFromDao(applicantDao)

    applicationArray.push(applicant)
  }

  return applicationArray
}

export function mapFromDao(applicationDao: ApplicationDao): Application {
  return new Application(
    applicationDao.id,
    applicationDao.applicantId,
    applicationDao.schemeId,
  )
}
