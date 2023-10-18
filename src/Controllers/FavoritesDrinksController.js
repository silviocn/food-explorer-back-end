const knex = require("../database/knex")

class favoritesDrinksController {
  async create(request, response) {
    const { drink_id } = request.body
    const user_id = request.user.id
    await knex("favoritesDrinks").insert({ drink_id, user_id })
    response.json()
  }

  async delete(request, response) {
    const { id } = request.params
    const user_id = request.user.id
    await knex("favoritesDrinks").where({ drink_id: id }).where({ user_id }).delete()
    return response.json()
  }
  async show(request, response) {
    const { id } = request.params
    const user_id = request.user.id
    const favoriteDrink = await knex("favoritesDrinks").where({ drink_id: id }).where({ user_id })
    return response.json({ favoriteDrink })
  }
  async index(request, response) {
    const user_id = request.user.id
    const favoritesDrinks = await knex("favoritesDrinks").where({ user_id }).select(["drinks.id", "drinks.name", "drinks.image", "drinks.price", "drinks.description"]).innerJoin("drinks", "drinks.id", "favoritesDrinks.drink_id").orderBy("drinks.name")
    return response.json({ favoritesDrinks })
  }
}

module.exports = favoritesDrinksController