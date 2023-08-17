exports.up = knex => knex.schema.createTable("ingredientsDrinks", table => {
  table.increments("id")
  table.text("name").notNullable()
  table.integer("drink_id").references("id").inTable("drinks").onDelete("CASCADE")
})

exports.down = knex => knex.schema.dropTable("ingredientsDrinks")
