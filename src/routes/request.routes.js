const { Router } = require("express")
const RequestController = require("../Controllers/RequestController")
const requestController = new RequestController()
const requestRoutes = Router()
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")

requestRoutes.use(ensureAuthenticated)
requestRoutes.post("/", requestController.create)
requestRoutes.get("/:id", requestController.show)
requestRoutes.get("/", requestController.index)
requestRoutes.delete("/", requestController.delete)

module.exports = requestRoutes