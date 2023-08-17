exports.up = knex => knex.schema.createTable("ingredientsDesserts", table => {
  table.increments("id")
  table.text("name").notNullable()
  table.integer("dessert_id").references("id").inTable("desserts").onDelete("CASCADE")
})

exports.down = knex => knex.schema.dropTable("ingredientsDesserts")
