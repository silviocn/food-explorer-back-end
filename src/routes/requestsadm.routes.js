const { Router } = require("express")
const RequestsAdmController = require("../Controllers/RequestsAdmController")
const requestsAdmController = new RequestsAdmController()
const RequestsAdmRoutes = Router()

RequestsAdmRoutes.delete("/:id", requestsAdmController.delete)
RequestsAdmRoutes.put("/", requestsAdmController.update)
RequestsAdmRoutes.get("/", requestsAdmController.index)

module.exports = RequestsAdmRoutes