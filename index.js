const express = require('express')
const mongoose = require('mongoose')
const app = express()
app.use(express.json())
app.use(require('./routes/books.route.js'))
app.use(require('./routes/authors.route.js'))
app.use(require('./routes/genres.route.js'))
app.use(require('./routes/reviews.route.js'))
mongoose
  .connect(
    'mongodb+srv://into:code@cluster0.lz09cai.mongodb.net/BooksStore?retryWrites=true&w=majority'
  )
  .then(() => {
    console.log('Успешно соединились с сервером MongoDB')
  })
  .catch(() => {
    'Ошибка при соединении с сервером MongoDB'
  })
app.listen(4000, () => {
  console.log('Сервер запущен успешно!')
})
