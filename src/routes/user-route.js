import express from "express"
import userController from "../controller/userController.js"

const app = express.Router()

app.post("/", userController.register)
app.post("/login", userController.login)
app.delete("/logout/:id", userController.logout)

export default {
    app
}