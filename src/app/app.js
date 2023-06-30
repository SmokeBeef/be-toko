import express from "express";
import userRoute from "../routes/user-route.js"
import dotenv from "dotenv"
import { errMiddleware } from "../middleware/mid-err.js";
import cookieParser from "cookie-parser"
import cors from "cors"
import barangRouter from "../routes/barang-router.js";

// dotenv.config({ path: "../../.env" })
const url = ["http://localhost:3000", "*"]
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors({
    // credentials: true,
    // origin: (origin, cb) => {
    //     if (!url.includes(origin))
    //         cb(new Error("Origin Block bby CORS"), origin)

    //     cb(null, origin)
    // }
}
));
// app.all('*', function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
//     res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
//     next()
// })

app.use(cookieParser())


app.use("/user", userRoute.app)
app.use("/barang", barangRouter.app)
app.use(errMiddleware)
export {
    app
}