const { Router } = require("express")
const FavoritesDessertsController = require("../Controllers/FavoritesDessertsController")
const favoritesDessertsController = new FavoritesDessertsController()
const favoritesDessertsRoutes = Router()
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")

favoritesDessertsRoutes.use(ensureAuthenticated)
favoritesDessertsRoutes.post("/", favoritesDessertsController.create)
favoritesDessertsRoutes.get("/", favoritesDessertsController.index)
favoritesDessertsRoutes.delete("/:id", favoritesDessertsController.delete)
favoritesDessertsRoutes.get("/:id", favoritesDessertsController.show)

module.exports = favoritesDessertsRoutes 