const express = require("express");
const UsersContoller = require('../controllers/usersController');
const router = express.Router();

router.get('/', UsersContoller.getUsers)

router.get('/:id', UsersContoller.getSingleUser)

router.post('/', UsersContoller.createUser)

router.patch('/:id', UsersContoller.updateUser)

router.delete('/:id', UsersContoller.deleteUser)

module.exports = router;