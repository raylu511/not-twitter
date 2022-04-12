const UserModel = require("../models/usersModel");
const bcrypt = require("bcryptjs");

class AuthController {
  static getLoginPage(req, res) {
    return res.render("login");
  }
  static getRegisterPage(req, res) {
    return res.render("register");
  }
  static async validateLogin(req, res) {
    try {
      const {username, password} = req.body;
      const user = await UserModel.getUserFromDBByUsername(username);
      console.log(password, user[0].password)
      const validate = await bcrypt.compare(password, user[0].password)
      if (!validate) {
        throw new Error("Invalid credential")
      }
      res.send(validate)
    } catch (err) {
      res.status(401).send(err);
    }
  }
  static async validateRegister(req, res) {
    try {
      const { username, password } = req.body;
      const hashPassword = bcrypt.hashSync(password, 8);
      const newUser = await UserModel.createUserFromDB(username, hashPassword);
      res.send(newUser);
    } catch (err) {
      res.status(403).send(err);
    }
  }
}

module.exports = AuthController;
