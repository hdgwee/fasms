import { Request, Response, NextFunction } from "express-serve-static-core"

export function log(request: Request, response: Response, next: NextFunction) {
  const send = response.send

  response.send = (content) => {
    const log = {
      method: request.method,
      url: request.url,
      response: content,
    }

    console.log(JSON.stringify(log))

    response.send = send
    return response.send(content)
  }

  next()
}
