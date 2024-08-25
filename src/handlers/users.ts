import { Request, Response } from "express-serve-static-core"
import { LoginDto } from "../dtos/login"
import { login as loginUser } from "../useCases/user"

export async function login(
  request: Request<{}, {}, LoginDto, {}>,
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
