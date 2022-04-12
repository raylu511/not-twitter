const express = require("express");
const AuthController = require('../controllers/authController');
const router = express.Router();

router.get('/login', AuthController.getLoginPage);
router.get('/register', AuthController.getRegisterPage);
router.post('/login', AuthController.validateLogin);
router.post('/register', AuthController.validateRegister);

module.exports = router;