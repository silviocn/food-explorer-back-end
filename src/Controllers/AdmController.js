const { hash } = require("bcrypt")
const AppError = require("../utils/AppError")
const sqliteConnection = require("../database/sqlite")

class AdmController {

  async create(request, response) {
    const { name, email, password } = request.body
    const database = await sqliteConnection()
    const checkUserExists = await database.get("SELECT * FROM adm WHERE email = (?)", [email])
    if (checkUserExists) {
      throw new AppError("E-mail already been used!")
    }
    if (!name) {
      throw new AppError("Please fill in your name, it's mandatory.")
    }
    const hashedPassword = await hash(password, 8)
    await database.run("INSERT INTO adm (name, email, password) VALUES (?, ?, ?)", [name, email, hashedPassword])

    return response.status(201).json()
  }
}

module.exports = AdmController