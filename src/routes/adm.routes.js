const { Router } = require("express")
const admRoutes = Router()
const AdmController = require("../Controllers/AdmController")
const admController = new AdmController()

admRoutes.post("/", admController.create)

module.exports = admRoutes
