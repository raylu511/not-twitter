const db = require("../db/db");

class UserModel {
  static getUsersFromDB() {
    return db.select().from("users");
  }
  static getUserFromDBByUsername(username) {
    return db.select().from("users").where({ username: username});
  }
  static getSingleUserFromDB(id) {
    return db.select().from("users").where({ id });
  }

  static createUserFromDB(username, password) {
    return db("users")
      .insert({ username, password })
      .returning(["id", "username", "password", "created_at", "updated_at"]);
  }
  static updateUserFromDB(id, username) {
    return db("users")
      .update("username", username)
      .update("updated_at", getCurrentDateJson())
      .where("id", id)
      .returning(["id", "username", "password", "created_at", "updated_at"]);
  }
  static deleteUserFromDB(id) {
    return db("users")
      .delete()
      .where({ id })
      .returning(["id", "username", "password", "created_at", "updated_at"]);
  }
}

function getCurrentDateJson() {
  return new Date().toJSON();
}

module.exports = UserModel;
