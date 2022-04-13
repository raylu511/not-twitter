/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {username: "Shawn", password: "123"},
    {username: "Jarae", password: "1234"},
    {username: "Ray", password: "12345"},
  ]);
  
  await knex('blogs').del()
  await knex('blogs').insert([
    {user_id: 1, body: `Shawn's Blog`},
    {user_id: 2, body: `Jarae's Blog`},
    {user_id: 3, body: `Ray's Blog`},
  ]);
  await knex('comments').del()
  await knex('comments').insert([
    {user_id: 1, blog_id: 2, comment_text: "Nice Blog FROM Shawn!"},
    {user_id: 1, blog_id: 3, comment_text: "Nice Blog From Shawn!"},
    {user_id: 2, blog_id: 1, comment_text: "Nice Blog From Jarae!"},
    {user_id: 3, blog_id: 2, comment_text: "Nice Blog From Ray!"},
    
  ]);
  await knex('likes').del()
  await knex('likes').insert([
    {user_id: 1, blog_id: 2},
    {user_id: 1, blog_id: 3},
    {user_id: 2, blog_id: 1},
    {user_id: 3, blog_id: 2},
  ]);
};
