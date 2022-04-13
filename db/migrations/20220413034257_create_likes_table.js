/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("likes", (table) => {
    table.increments("id").primary();
    table.integer("blog_id").notNullable();
    table.integer("user_id").notNullable();
    table.timestamps(true, true);

    table.foreign("user_id").references("id").inTable("users");
    table.foreign("blog_id").references("id").inTable("blogs");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("likes");
};
