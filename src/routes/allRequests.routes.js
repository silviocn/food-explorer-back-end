const { Router } = require("express")
const AllRequestsController = require("../Controllers/AllRequestsController")
const allRequestsController = new AllRequestsController()
const allRequestsRoutes = Router()
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")

allRequestsRoutes.use(ensureAuthenticated)
allRequestsRoutes.post("/", allRequestsController.create)
allRequestsRoutes.delete("/:id", allRequestsController.delete)
allRequestsRoutes.get("/", allRequestsController.show)

module.exports = allRequestsRoutes