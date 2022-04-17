/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('blogs').del()
  await knex('users').del()
  await knex('users').insert([
    {id: 1, username: "Shawn", password: "123"},
    {id: 2, username: "Jarae", password: "1234"},
    {id: 3, username: "Ray", password: "12345"},
  ]);
  await knex('blogs').insert([
    {user_id: 1, body: `Shawn's Blog`},
    {user_id: 2, body: `Jarae's Blog`},
    {user_id: 3, body: `Ray's Blog`},
  ]);
  
  
};
