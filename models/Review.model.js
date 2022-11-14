const mongoose = require('mongoose')
const ReviewSchema = mongoose.Schema({
  name: String,
  reviewAuthorName: String,
  book: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Book',
  },
})
const Review = mongoose.model('Review', ReviewSchema)
module.exports = Review
