exports.up = knex => knex.schema.createTable("search", table => {
  table.increments("id")
  table.text("search")
  table.text("user_id")
})

exports.down = knex => knex.schema.dropTable("search")
