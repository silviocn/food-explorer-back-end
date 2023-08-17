const knex = require("../database/knex")
const AppError = require("../utils/AppError")
const { compare } = require("bcrypt")
const authConfig = require("../configs/auth")
const { sign } = require("jsonwebtoken")

class SessionsAdmController {
  async create(request, response) {
    const { email, password } = request.body
    const user = await knex("adm").where({ email }).first()
    if (!user) {
      throw new AppError("Incorrect e-mail or password!", 401)
    }
    const passwordMatched = await compare(password, user.password)
    if (!passwordMatched) {
      throw new AppError("Incorrect e-mail or password", 401)
    }
    const { secret, expiresIn } = authConfig.jwt
    const token = sign({}, secret, { subject: String(user.id), expiresIn })
    return response.json({ user, token })
  }
}

module.exports = SessionsAdmController
