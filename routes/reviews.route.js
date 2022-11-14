const { Router } = require('express')
const { getReviewsfromBook } = require('../controller/review.controller')
const ReviewController = require('../controller/review.controller')

const router = Router()

router.post('/reviews', ReviewController.addReviewForBook)
router.delete('/reviews/:id', ReviewController.deleteReview)
router.get('/reviews/', ReviewController.getReviewsBooks)

router.get('/reviews/:id', getReviewsfromBook)

module.exports = router
