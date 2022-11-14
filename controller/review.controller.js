const Review = require('../models/Review.model')

const ReviewController = {
  addReviewForBook: function (req, res) {
    Review.create({
      name: req.body.name,
      reviewAuthorName: req.body.reviewAuthorName,
      book: req.body.book,
    }).then((reviews) => {
      res.json(reviews)
    })
  },
  deleteReview: function (req, res) {
    Review.findByIdAndRemove(req.params.id).then((reviews) => {
      res.json(reviews)
    })
  },

  getReviewsfromBook: function (req, res) {
    Review.find({ book: req.params.id }, (err, reviews) => {
      res.json(reviews)
    })
      .populate({
        path: 'book',
        populate: {
          path: 'author',
          model: 'Author',
        },
      })
      .populate({
        path: 'book',
        populate: {
          path: 'genre',
          model: 'Genre',
        },
      })
  },
  getReviewsBooks: function (req, res) {
    Review.find({}, (err, reviews) => {
      res.json(reviews)
    })
  },
}

module.exports = ReviewController
