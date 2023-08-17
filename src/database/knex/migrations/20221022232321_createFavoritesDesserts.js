exports.up = knex => knex.schema.createTable("favoritesDesserts", table => {
  table.increments("id")
  table.integer("user_id").references("id").inTable("users")
  table.integer("dessert_id").references("id").inTable("desserts").onDelete("CASCADE")
})

exports.down = knex => knex.schema.dropTable("favoritesDisserts")