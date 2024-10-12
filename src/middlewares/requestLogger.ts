import { Request, Response, NextFunction } from "express-serve-static-core"

export function log(request: Request, _: Response, next: NextFunction) {
  const log = {
    method: request.method,
    url: request.url,
    params: request.params,
    headers: request.headers,
    body: request.body,
  }

  console.log(JSON.stringify(log))

  next()
}
