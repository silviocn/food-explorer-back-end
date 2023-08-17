const knex = require("../database/knex")
const DiskStorage = require("../providers/DiskStorage")

class DrinksController {
  async create(request, response) {
    const { name } = request.body
    const { description } = request.body
    const { price } = request.body
    const { ingredients } = request.body
    let Ingredients = ingredients.split(",")
    const avatarFileName = request.file.filename
    const diskStorage = new DiskStorage()
    const filename = await diskStorage.saveFile(avatarFileName)
    const drink_id = await knex("drinks").insert({ name, description, price, image: filename })
    const ingredientsInsert = Ingredients.map(name => {
      return {
        drink_id,
        name
      }
    })
    await knex("ingredientsDrinks").insert(ingredientsInsert)
    response.json()
  }
  async show(request, response) {
    const { id } = request.params
    const drinks = await knex("drinks").where({ id }).first()
    const ingredients = await knex("ingredientsDrinks").where({ drink_id: id }).orderBy("name")
    return response.json({ ...drinks, ingredients })
  }
  async delete(request, response) {
    const { id } = request.params
    await knex("drinks").where({ id }).delete()
    return response.json()
  }
  async index(request, response) {
    const { name } = request.query
    const drinks = await knex("drinks").whereLike("name", `%${name}%`).orderBy("name")
    return response.json({ drinks })
  }
}

module.exports = DrinksController