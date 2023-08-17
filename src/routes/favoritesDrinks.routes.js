const { Router } = require("express")
const FavoritesDrinksController = require("../Controllers/FavoritesDrinksController")
const favoritesDrinksController = new FavoritesDrinksController()
const favoritesDrinksRoutes = Router()
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")

favoritesDrinksRoutes.use(ensureAuthenticated)
favoritesDrinksRoutes.post("/", favoritesDrinksController.create)
favoritesDrinksRoutes.get("/", favoritesDrinksController.index)
favoritesDrinksRoutes.delete("/:id", favoritesDrinksController.delete)
favoritesDrinksRoutes.get("/:id", favoritesDrinksController.show)

module.exports = favoritesDrinksRoutes 