const express = require('express')
const blogsController = require('../controllers/usersController')
const router = express.Router()

router.get('/',blogsController.getUsers)

router.get('/:id', blogsController.getUser)

router.post('/', blogsController.getU)

router.put('/:id', blogsController.getU)

router.delete('/:id', blogsController.getU)


module.exports = router