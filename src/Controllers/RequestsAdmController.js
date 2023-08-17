const knex = require("../database/knex")
const sqliteConnection = require("../database/sqlite")

class RequestsAdmController {
  /*async create(request, response) {
    const { status, details } = request.body
    const user_id = request.user.id
    //const { user_id } = request.params
    await knex("allRequests").insert({ details, status, user_id })
    return response.json()
  }*/
  async update(request, response) {
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
  }

  async delete(request, response) {
    const { id } = request.params
    await knex("allRequests").where({ id }).delete()
    return response.json()
  }

  /*async index(request, response) {
    const allRequests = await knex("allRequests").orderBy("details")
    return response.json({ allRequests })
  }*/

  async index(request, response) {
    //const { user_id } = request.query
    const allRequestsUsers = await knex("allRequests")
      .select(["allRequests.id", "users.name", "allRequests.status", "allRequests.details", "allRequests.created_at"])
      .innerJoin("users", "users.id", "allRequests.user_id")
      .orderBy("users.name")
    return response.json({ allRequestsUsers })
  }
  
  /*async show(request, response) {
    const user_id = request.user.id
    const allRequests = await knex("allRequests").where({ user_id })
    return response.json({ allRequests })
  }*/
}

module.exports = RequestsAdmController