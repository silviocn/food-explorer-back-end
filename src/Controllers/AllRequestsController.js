const knex = require("../database/knex")
//const sqliteConnection = require("../database/sqlite")

class AllRequestsController {
  async create(request, response) {
    const { status, details } = request.body
    const user_id = request.user.id
    //const { user_id } = request.params
    await knex("allRequests").insert({ details, status, user_id })
    return response.json()
  }
  /*async update(request, response) {
    const { status, id } = request.body
    //const { id } = request.params;
    const database = await sqliteConnection()
    const requests = await database.get("SELECT * FROM allRequests WHERE id = (?)", [id])
    requests.status = status
    await database.run(`
    UPDATE allRequests SET 
    status = ?
    WHERE id = ?`, 
    [requests.status, id])
    return response.json(requests)
  }*/

  async delete(request, response) {
    const { id } = request.params
    await knex("allRequests").where({ id }).delete()
    return response.json()
  }

  /*async index(request, response) {
    const allRequests = await knex("allRequests").orderBy("details")
    return response.json({ allRequests })
  }*/

  async show(request, response) {
    const user_id = request.user.id
    const allRequests = await knex("allRequests").where({ user_id })
    return response.json({ allRequests })
  }
}

module.exports = AllRequestsController