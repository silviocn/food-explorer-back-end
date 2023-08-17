exports.up = knex => knex.schema.createTable("desserts", table => {
  table.increments("id")
  table.text("image")
  table.text("name")
  table.integer("price")
  table.text("description")
  table.timestamp("created_at").default(knex.fn.now())
})

exports.down = knex => knex.schema.dropTable("desserts")