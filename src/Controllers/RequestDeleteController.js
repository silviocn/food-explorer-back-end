const knex = require("../database/knex")

class RequestDeleteController {
  async delete(request, response) {
    const { id } = request.params
    await knex("requests").where({ id }).delete()
    return response.json()
  }
}

module.exports = RequestDeleteController