const { Router } = require('express')
const BooksController = require('../controller/books.controller')

const router = Router()

router.post('/books', BooksController.addNewBook)
router.delete('/books/:id', BooksController.deleteBook)
router.patch('/books/:id', BooksController.changeBook)
router.get('/books/:BookId', BooksController.getBookInfo)

router.get('/books', BooksController.getAllBooks)

router.get('/books/genre/:id', BooksController.getBooksFromGenre)

module.exports = router
