import jwt from "jsonwebtoken"
import { loginUser } from "../repositories/users"

export async function login(username: string, password: string) {
  const user = await loginUser(username, password)
  if (user !== null) {
    const secret = "Get from process.env.TOKEN_SECRET"

    const token = jwt.sign({ username: username }, secret, {
      expiresIn: 60 * 60 * 24 * 365,
    })

    return token
  }

  return ""
}
