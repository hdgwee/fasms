import sequelize from "../sequelize"
import jwt from "jsonwebtoken"
import UserSequelizer from "../sequelize/models/user.model"

export function login(username: string, password: string) {
  return UserSequelizer(sequelize)
    .findOne({
      where: { username: username, password: password },
    })
    .then((existingUser) => {
      if (existingUser) {
        const secret = "Get from process.env.TOKEN_SECRET"

        const token = jwt.sign({ username: username }, secret, {
          expiresIn: 60 * 60 * 24 * 365,
        })

        return token
      } else {
        return ""
      }
    })
}
