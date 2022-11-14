const mongoose = require('mongoose')
const AuthorSchema = mongoose.Schema({
  name: String,
  information: String,
})
const Author = mongoose.model('Author', AuthorSchema)
module.exports = Author
