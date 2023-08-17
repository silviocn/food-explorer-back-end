exports.up = knex => knex.schema.createTable("favoritesDrinks", table => {
  table.increments("id")
  table.integer("user_id").references("id").inTable("users")
  table.integer("drink_id").references("id").inTable("drinks").onDelete("CASCADE")
})

exports.down = knex => knex.schema.dropTable("favoritesDrinks")