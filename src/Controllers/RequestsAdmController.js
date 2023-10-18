const knex = require("../database/knex")
const sqliteConnection = require("../database/sqlite")

class RequestsAdmController {
  async update(request, response) {
    const { status, id } = request.body
    
    const database = await sqliteConnection()
    const requests = await database.get("SELECT * FROM allRequests WHERE id = (?)", [id])
    requests.status = status
    await database.run(`
    UPDATE allRequests SET 
    status = ?
    WHERE id = ?`, 
    [requests.status, id])
    return response.json(requests)
  }

  async delete(request, response) {
    const { id } = request.params
    await knex("allRequests").where({ id }).delete()
    return response.json()
  }

  async index(request, response) {
    const allRequestsUsers = await knex("allRequests")
      .select(["allRequests.id", "users.name", "allRequests.status", "allRequests.details", "allRequests.created_at"])
      .innerJoin("users", "users.id", "allRequests.user_id")
      .orderBy("users.name")
    return response.json({ allRequestsUsers })
  }
}

module.exports = RequestsAdmController