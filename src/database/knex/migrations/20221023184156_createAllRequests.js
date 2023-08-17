exports.up = knex => knex.schema.createTable("allRequests", table => {
  table.increments("id")
  table.text("status")
  table.text("details")
  table.integer("user_id").references("id").inTable("users")
  table.timestamp("created_at").default(knex.fn.now())
})

exports.down = knex => knex.schema.dropTable("allRequests")