const Book = require('../models/Book.model')

const BooksController = {
  addNewBook: function (req, res) {
    Book.create({
      name: req.body.name,
      author: req.body.author,
      genre: req.body.genre,
    }).then((books) => {
      res.json(books)
    })
  },
  deleteBook: function (req, res) {
    Book.findByIdAndRemove(req.params.id).then((books) => {
      res.json(books)
    })
  },

  changeBook: function (req, res) {
    Book.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      author: req.body.author,
      genre: req.body.genre,
    }).then((books) => {
      res.json(books)
    })
  },
  getBookInfo: function (req, res) {
    Book.findById(req.params.BookId, (err, books) => {
      res.json(books)
    })
      .populate('author')
      .populate('genre')
  },

  getAllBooks: function (req, res) {
    Book.find({}, (err, books) => {
      res.json(books)
    })
  },

  getBooksFromGenre: function (req, res) {
    Book.find({ genre: req.params.id }, (err, books) => {
      res.json(books)
    }).populate('genre')
  },
}

module.exports = BooksController
