exports.up = knex => knex.schema.createTable("adm", table => {
  table.increments("id")
  table.text("name")
  table.text("email")
  table.text("password")
  table.timestamp("created_at").default(knex.fn.now())
})

exports.down = knex => knex.schema.dropTable("adm")
