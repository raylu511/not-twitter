const UserModel = require("../models/usersModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

class AuthController {
  static getLoginPage(req, res) {
    return res.render("login");
  }
  static getRegisterPage(req, res) {
    return res.render("register");
  }
  static async validateLogin(req, res) {
      const { username, password } = req.body;
      const user = await UserModel.getUserFromDBByUsername(username);
      if (!user[0]) {
        return res.status(404).json('Username not found')
      }
      const validate = await bcrypt.compare(password, user[0].password);
      if (!validate) {
        return res.status(404).json('Invalid password')
      }
      const token = jwt.sign(user[0], "Your_Secret_Key");
      return res
    .cookie("access_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
    })
    .status(200)
    .json({ message: "Logged in successfully 😊 👌" });
  }
  static async validateRegister(req, res) {
    const { username, password } = req.body;
    const hashPassword = bcrypt.hashSync(password, 8);
    try {
      const newUser = await UserModel.createUserFromDB(username, hashPassword);
      return res.status(201).json(newUser);
    } catch(err) {
      return res.status(404).json(err);
    }
  }
  static async signOut(req,res) {
    return res
      .clearCookie("access_token")
      .status(200)
      .redirect('/')
  };
}

module.exports = AuthController;
