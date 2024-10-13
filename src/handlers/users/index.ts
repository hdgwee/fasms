import { Request, Response } from "express-serve-static-core"
import { LoginRequest } from "./models"
import { login as loginUser } from "../../useCases/user"

export async function login(
  request: Request<{}, {}, LoginRequest, {}>,
  response: Response,
) {
  const username = request.body.username.toLowerCase()
  const password = request.body.password

  loginUser(username, password).then((token) => {
    if (token) {
      response.send(token)
    } else {
      response.sendStatus(400)
    }
  })
}
