const { Router } = require('express')
const AuthorController = require('../controller/authors.controller')

const router = Router()

router.post('/authors', AuthorController.addNewAuthor)

module.exports = router
