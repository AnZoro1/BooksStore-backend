const { Router } = require('express')
const GenresController = require('../controller/genres.controller')

const router = Router()

router.post('/genres', GenresController.addNewGenres)
router.delete('/genres/:id', GenresController.deleteGenres)

router.get('/genres', GenresController.getAllGenres)

module.exports = router
