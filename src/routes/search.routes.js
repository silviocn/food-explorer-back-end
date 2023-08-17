const { Router } = require("express")
const SearchController = require("../Controllers/SearchController")
const searchController = new SearchController()
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")
const searchRouter = Router()

searchRouter.use(ensureAuthenticated)
searchRouter.post("/", searchController.create)
searchRouter.get("/", searchController.index)
searchRouter.delete("/:id", searchController.delete)
searchRouter.get("/:id", searchController.show)

module.exports = searchRouter



