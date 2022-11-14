const Author = require('../models/Author.model')

const AuthorController = {
  addNewAuthor: function (req, res) {
    Author.create({
      name: req.body.name,
      information: req.body.information,
    }).then((authors) => {
      res.json(authors)
    })
  },
}

module.exports = AuthorController
