const Genre = require('../models/Genre.model')

const GenresController = {
  addNewGenres: function (req, res) {
    Genre.create({
      name: req.body.name,
      description: req.body.description,
    }).then((genres) => {
      res.json(genres)
    })
  },
  deleteGenres: function (req, res) {
    Genre.findByIdAndRemove(req.params.id).then((genres) => {
      res.json(genres)
    })
  },

  getAllGenres: function (req, res) {
    Genre.find({}, (err, genres) => {
      res.json(genres)
    })
  },
}

module.exports = GenresController
