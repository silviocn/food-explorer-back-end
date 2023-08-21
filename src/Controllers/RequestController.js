const knex = require("../database/knex")

class RequestController {
  async create(request, response) {
    const { name, amount, price, image } = request.body
    const user_id = request.user.id
    await knex("requests").insert({ name, amount, price, user_id, image })
    response.json()
  }
  async show(request, response) {
    const { id } = request.params
    const requests = await knex("requests").where({ id }).first()
    return response.json({ ...requests })
  }
  async delete(request, response) {
    await knex("requests").delete()
    return response.json()
  }
  async index(request, response) {
    const user_id = request.user.id
    const requests = await knex("requests").where({ user_id }).orderBy("name")
    return response.json({ requests })
  }
}

module.exports = RequestController