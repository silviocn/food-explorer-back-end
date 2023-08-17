const { Router } = require("express")
const DessertsController = require("../Controllers/DessertsController")
const dessertsController = new DessertsController()
const dessertsRoutes = Router()
const multer = require("multer")
const uploadConfig = require("../configs/uploads")
const upload = multer(uploadConfig.MULTER)

dessertsRoutes.post("/", upload.single("image"), dessertsController.create)
dessertsRoutes.get("/:id", dessertsController.show)
dessertsRoutes.get("/", dessertsController.index)
dessertsRoutes.delete("/:id", dessertsController.delete)

module.exports = dessertsRoutes