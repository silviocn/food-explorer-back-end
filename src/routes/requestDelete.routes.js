const { Router } = require("express")
const RequestDeleteController = require("../Controllers/RequestDeleteController")
const requestDeleteController = new RequestDeleteController()
const requestDeleteRoutes = Router()
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")

requestDeleteRoutes.use(ensureAuthenticated)
requestDeleteRoutes.delete("/:id", requestDeleteController.delete)

module.exports = requestDeleteRoutes