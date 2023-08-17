const { Router } = require("express")
const RequestDeleteController = require("../Controllers/RequestDeleteController")
const requestDeleteController = new RequestDeleteController()
const requestDeleteRoutes = Router()
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")

requestDeleteRoutes.use(ensureAuthenticated)
//requestRoutes.post("/", requestController.create)
//requestRoutes.get("/:id", requestController.show)
//requestRoutes.get("/", requestController.index)
requestDeleteRoutes.delete("/:id", requestDeleteController.delete)

module.exports = requestDeleteRoutes