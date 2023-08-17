const { Router } = require("express")
const AllRequestsController = require("../Controllers/AllRequestsController")
const allRequestsController = new AllRequestsController()
const allRequestsRoutes = Router()
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")

allRequestsRoutes.use(ensureAuthenticated)
allRequestsRoutes.post("/", allRequestsController.create)
//allRequestsRoutes.get("/", allRequestsController.index)
allRequestsRoutes.delete("/:id", allRequestsController.delete)
//allRequestsRoutes.put("/", allRequestsController.update)
allRequestsRoutes.get("/", allRequestsController.show)

module.exports = allRequestsRoutes