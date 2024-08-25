import cors from "cors"

const allowedOrigins = ["http://localhost:3000"]
const corsMiddlewareOptions: cors.CorsOptions = {
  origin: allowedOrigins,
}

export default corsMiddlewareOptions
