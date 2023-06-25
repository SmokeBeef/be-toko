import express from "express"
import barangController from "../controller/barangController.js"

const app = express.Router()

app.post("/add", barangController.add)
app.get("/", barangController.getAll)
app.get("/search/:keyword", barangController.search)
app.put("/update/:id", barangController.update)
app.delete("/del/:id", barangController.deleteBarang)

export default {
    app
}