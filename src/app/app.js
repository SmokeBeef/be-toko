import express from "express";
import userRoute from "../routes/user-route.js"
import dotenv from "dotenv"
import { errMiddleware } from "../middleware/mid-err.js";
import cookieParser from "cookie-parser"
import cors from "cors"
import barangRouter from "../routes/barang-router.js";

dotenv.config({ path: "../../.env" })
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
// 
app.use(cookieParser())

app.use("/user", userRoute.app)
app.use("/barang", barangRouter.app)
app.use(errMiddleware)

export {
    app
}