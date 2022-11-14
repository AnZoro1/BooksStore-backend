const mongoose = require('mongoose')
const GenreSchema = mongoose.Schema({
  name: String,
  description: String,
})
const Genre = mongoose.model('Genre', GenreSchema)
module.exports = Genre
