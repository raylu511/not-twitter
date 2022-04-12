const UserModel = require("../models/usersModel");

class AuthController {
  static getLoginPage(req, res) {
    return res.render("login");
  }
  static getRegisterPage(req, res) {
    return res.render("register");
  }
  static async validateLogin(req, res) {
    try{
      const user = await UserModel.getUserFromDBByUsername(req.body.username)
    } catch (err) {

    }
  }
  static async validateRegister(req, res) {
    try {
      const { username, password } = req.body;
      const newUser = await UserModel.createUserFromDB(username, password);
      res.send(newUser);
    } catch (err){
      res.status(403).send(err);
    }
  }
}

module.exports = AuthController;
