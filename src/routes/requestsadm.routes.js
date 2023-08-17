const { Router } = require("express")
const RequestsAdmController = require("../Controllers/RequestsAdmController")
const requestsAdmController = new RequestsAdmController()
const RequestsAdmRoutes = Router()
//const ensureAuthenticated = require("../middlewares/ensureAuthenticated")

//RequestsAdmRoutes.use(ensureAuthenticated)
//RequestsAdmRoutes.post("/", allRequestsController.create)
//allRequestsRoutes.get("/", allRequestsController.show)
RequestsAdmRoutes.delete("/:id", requestsAdmController.delete)
RequestsAdmRoutes.put("/", requestsAdmController.update)
RequestsAdmRoutes.get("/", requestsAdmController.index)

module.exports = RequestsAdmRoutes