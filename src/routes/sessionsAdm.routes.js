const { Router } = require("express")
const SessionsAdmController = require("../Controllers/SessionsAdmController")
const sessionsAdmController = new SessionsAdmController()
const sessionsAdmRoutes = Router()
sessionsAdmRoutes.post("/", sessionsAdmController.create)

module.exports = sessionsAdmRoutes