const knex = require("../database/knex")

class AllRequestsController {
  async create(request, response) {
    const { status, details } = request.body
    const user_id = request.user.id

    await knex("allRequests").insert({ details, status, user_id })
    return response.json()
  }

  async delete(request, response) {
    const { id } = request.params
    await knex("allRequests").where({ id }).delete()
    return response.json()
  }

  async show(request, response) {
    const user_id = request.user.id
    const allRequests = await knex("allRequests").where({ user_id })
    return response.json({ allRequests })
  }
}

module.exports = AllRequestsController