const knex = require("../database/knex")
const DiskStorage = require("../providers/DiskStorage")

class DessertsController {
  async create(request, response) {
    const { name } = request.body
    const { description } = request.body
    const { price } = request.body
    const { ingredients } = request.body
    let Ingredients = ingredients.split(",")
    const avatarFileName = request.file.filename
    const diskStorage = new DiskStorage()
    const filename = await diskStorage.saveFile(avatarFileName)
    const dessert_id = await knex("desserts").insert({ name, description, price, image: filename })
    const ingredientsInsert = Ingredients.map(name => {
      return {
        dessert_id,
        name
      }
    })
    await knex("ingredientsDesserts").insert(ingredientsInsert)
    response.json()
  }
  async show(request, response) {
    const { id } = request.params
    const desserts = await knex("desserts").where({ id }).first()
    const ingredients = await knex("ingredientsDesserts").where({ dessert_id: id }).orderBy("name")
    return response.json({ ...desserts, ingredients })
  }
  async delete(request, response) {
    const { id } = request.params
    await knex("desserts").where({ id }).delete()
    return response.json()
  }
  async index(request, response) {
    const { name } = request.query
    const desserts = await knex("desserts").whereLike("name", `%${name}%`).orderBy("name")
    return response.json({ desserts })
  }
}

module.exports = DessertsController