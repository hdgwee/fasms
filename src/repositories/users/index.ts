import { sequelize } from "../../sequelize"
import { UserDao } from "../../sequelize/models/user.model"
import { mapFromDao } from "./mappers"

export async function loginUser(username: string, password: string) {
  const userDao = await sequelize.models.user.findOne({
    where: { username: username, password: password },
  })

  if (userDao === null) {
    return null
  }

  return mapFromDao(userDao as UserDao)
}
