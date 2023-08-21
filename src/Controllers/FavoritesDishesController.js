const knex = require("../database/knex")

class favoritesDishesController {
  async create(request, response) {
    const { dish_id } = request.body
    const user_id = request.user.id
    await knex("favoritesDishes").insert({ dish_id, user_id })
    response.json()
  }

  async delete(request, response) {
    const { id } = request.params
    const user_id = request.user.id
    await knex("favoritesDishes").where({ dish_id: id }).where({ user_id }).delete()
    return response.json()
  }
  async show(request, response) {
    const { id } = request.params
    const user_id = request.user.id
    const favoriteDish = await knex("favoritesDishes").where({ dish_id: id }).where({ user_id })
    return response.json({ favoriteDish })
  }
  async index(request, response) {
    const user_id = request.user.id
    const favoritesDishes = await knex("favoritesDishes").where({ user_id }).select(["dishes.id", "dishes.name", "dishes.image", "dishes.price", "dishes.description"]).innerJoin("dishes", "dishes.id", "favoritesDishes.dish_id").orderBy("dishes.name")
    return response.json({ favoritesDishes })
  }
}

module.exports = favoritesDishesController