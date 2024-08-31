import { sequelize } from "../../sequelize"
import { DetailedSchemeDao } from "../../sequelize/models/scheme.models"
import { mapFromDao } from "./mappers"

export async function getSchemes(ids: string[]) {
  const schemeDaoList = await sequelize.models.scheme.findAll({
    where: { id: ids },
    include: ["criteria", "benefits"],
  })

  const schemes = mapFromDao(schemeDaoList as DetailedSchemeDao[])
  return schemes
}

export async function getAllSchemes() {
  const schemeDaoList = await sequelize.models.scheme.findAll({
    include: ["criteria", "benefits"],
  })

  const schemes = mapFromDao(schemeDaoList as DetailedSchemeDao[])
  return schemes
}
