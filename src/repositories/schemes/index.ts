import { sequelize } from "../../sequelize"
import { DetailedSchemeDao } from "../../sequelize/models/scheme.model"
import { mapFromDao } from "./mappers"

export async function getSchemes(ids: string[]) {
  const schemeDaoArray = await sequelize.models.scheme.findAll({
    where: { id: ids },
    include: ["criteria", "benefits"],
  })

  const schemes = mapFromDao(schemeDaoArray as DetailedSchemeDao[])
  return schemes
}

export async function getAllSchemes() {
  const schemeDaoArray = await sequelize.models.scheme.findAll({
    include: ["criteria", "benefits"],
  })

  const schemes = mapFromDao(schemeDaoArray as DetailedSchemeDao[])
  return schemes
}
