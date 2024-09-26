import { User } from "../../models/user"
import { UserDao } from "../../sequelize/models/user.model"

export function mapFromDao(userDao: UserDao): User {
  return new User(userDao.username, userDao.role)
}
