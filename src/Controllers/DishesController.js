const knex = require("../database/knex")
const DiskStorage = require("../providers/DiskStorage")

class DishesController {
  async create(request, response) {
    const { name, description, price, ingredients } = request.body

    let Ingredients = ingredients.split(",")
    const avatarFileName = request.file.filename
    const diskStorage = new DiskStorage()
    const filename = await diskStorage.saveFile(avatarFileName)
    const dish_id = await knex("dishes").insert({ name, description, price, image: filename })
    const ingredientsInsert = Ingredients.map(name => {
      return {
        dish_id,
        name
      }
    })
    await knex("ingredientsDishes").insert(ingredientsInsert)
    response.json()
  }
  async show(request, response) {
    const { id } = request.params
    const dish = await knex("dishes").where({ id }).first()
    const ingredients = await knex("ingredientsDishes").where({ dish_id: id }).orderBy("name")
    return response.json({ ...dish, ingredients })
  }
  /*async delete(request, response) {
    const { id } = request.params
    await knex("dishes").where({ id }).delete()
    return response.json()
  }*/

  async index(request, response) {
    const { name } = request.query
    const dishes = await knex("dishes").whereLike("name", `%${name}%`).orderBy("name")
    return response.json({ dishes })
  }

  async update(request, response) {
    const { id } = request.params
    const dish = await knex("dishes").where({ id }).first()
    const ingredients = await knex("ingredientsDishes").where({ dish_id: id }).orderBy("name")
    
    const formData = new FormData()
    formData.append("name", name)
    formData.append("description", description)
    formData.append("price", price)
    formData.append("ingredients", ingredients)
    formData.append("image", file)
    await api.post("/dishes", formData).then(() => { alert("Item successfully updated"); navigate("/adm") }).catch(error => { if (error.response) { alert(error.response.data.message) } else { alert("Unable to register") } })
    
    return response.json({ ...dish, ingredients })
  }

}

module.exports = DishesController