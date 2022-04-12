class AuthController {
  static getLoginPage(req, res) {
    return res.render("login");
  }
  static getRegisterPage(req, res) {
    return res.render("register");
  }
  static validateLogin(req, res) {
    return res.send("Post Login");
  }
  static validateRegister(req, res) {
    
  }
}

module.exports = AuthController;