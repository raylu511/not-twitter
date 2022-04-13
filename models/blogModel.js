const db = require("../db/db");

class BlogModel {
  static getBlogsFromDB() {
    return db.select().from("blogs").orderBy("created_at", "desc");
  }
  static getSingleBlogFromDB(id) {
    return db.select().from("blogs").where({ id });
  }
  static updateBlogFromDB(id, body) {
    return db("blogs")
    .update("body", body)
    .update("updated_at", getCurrentDateJson())
    .where("id", id)
    .returning(["id", "user_id", "body", "created_at", "updated_at"]);
  }
  static deleteBlogFromDB(id) {
    return db("blogs")
      .delete()
      .where({ id })
      .returning(["id", "user_id", "body", "created_at", "updated_at"]);
  }
  static createBlogFromDB(user_id, body) {
    return db("blogs").insert({ body, user_id }).returning(["id", "body"]);
  }
}

function getCurrentDateJson() {
    return new Date().toJSON();
  }

module.exports = BlogModel;
