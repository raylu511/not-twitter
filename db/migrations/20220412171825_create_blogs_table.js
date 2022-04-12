/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('blogs', table =>{
        table.increments('id').primary()
        table.integer('user_id').notNullable()
        table.string('body').notNullable()
        table.timestamps(true, true)
        table.foreign('user_id').references('id').inTable('users')
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('blogs')
};
