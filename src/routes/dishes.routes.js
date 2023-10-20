const { Router } = require("express")
const DishesController = require("../Controllers/DishesController")
const dishesController = new DishesController()
const dishesRoutes = Router()
const multer = require("multer")
const uploadConfig = require("../configs/uploads")
const upload = multer(uploadConfig.MULTER)

dishesRoutes.post("/", upload.single("image"), dishesController.create)
dishesRoutes.get("/:id", dishesController.show)
dishesRoutes.get("/", dishesController.index)
//dishesRoutes.delete("/:id", dishesController.delete)
dishesRoutes.put("/:id", dishesController.update)

module.exports = dishesRoutes