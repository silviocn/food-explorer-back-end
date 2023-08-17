const { Router } = require("express")
const FavoritesDishesController = require("../Controllers/FavoritesDishesController")
const favoritesDishesController = new FavoritesDishesController()
const favoritesDishesRoutes = Router()
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")

favoritesDishesRoutes.use(ensureAuthenticated)
favoritesDishesRoutes.post("/", favoritesDishesController.create)
favoritesDishesRoutes.get("/", favoritesDishesController.index)
favoritesDishesRoutes.delete("/:id", favoritesDishesController.delete)
favoritesDishesRoutes.get("/:id", favoritesDishesController.show)

module.exports = favoritesDishesRoutes 