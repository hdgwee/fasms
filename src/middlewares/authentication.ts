import { Request, Response, NextFunction } from "express-serve-static-core"
import jwt, { JwtPayload } from "jsonwebtoken"

export function authenticate(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const authHeader = request.headers["authorization"]
  if (!authHeader) {
    return response.sendStatus(401)
  }

  const token = authHeader.split(" ")[1]
  if (!token) {
    return response.sendStatus(401)
  }

  const secret = "Get from process.env.TOKEN_SECRET"

  const decodedValue = jwt.verify(token, secret) as JwtPayload
  if (!decodedValue) {
    return response.sendStatus(403)
  }

  next()
}
