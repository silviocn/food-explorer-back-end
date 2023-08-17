const { Router } = require("express")
const DrinksController = require("../Controllers/DrinksController")
const drinksController = new DrinksController()
const drinksRoutes = Router()
const multer = require("multer")
const uploadConfig = require("../configs/uploads")
const upload = multer(uploadConfig.MULTER)

drinksRoutes.post("/", upload.single("image"), drinksController.create)
drinksRoutes.get("/:id", drinksController.show)
drinksRoutes.get("/", drinksController.index)
drinksRoutes.delete("/:id", drinksController.delete)

module.exports = drinksRoutes