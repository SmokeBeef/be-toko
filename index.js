import { app } from "./src/app/app.js"
import { logger } from "./src/app/logger.js"
import cors from "cors"

// app.use(cors())
app.listen(4000, () => {
    logger.info("App start on port http://localhost:4000 ")
})
