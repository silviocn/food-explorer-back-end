const knex = require("../database/knex")

class SearchController {
  async create(request, response) {
    const { search } = request.body
    const user_id = request.user.id
    await knex("search").insert({ search, user_id })
    response.json()
  }
  async show(request, response) {
    const { id } = request.params
    const search = await knex("search").where({ id }).first()
    return response.json({ search })
  }
  async delete(request, response) {
    const { id } = request.params
    await knex("search").where({ id }).delete()
    return response.json()
  }
  async index(request, response) {
    const { search } = request.query
    const user_id = request.user.id
    const Search = await knex("search")
      .whereLike("search", `%${search}%`)
      .where({ user_id })
      .groupBy("search")
    return response.json({ Search })
  }
}

module.exports = SearchController