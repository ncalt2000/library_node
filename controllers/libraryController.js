var express = require('express');
var bodyParser = require('body-parser');
var Library = require('../models/library.js');

var router = express.Router();

router.use(bodyParser.urlencoded({extended: true}));

// CREATES A NEW BOOK IN LIBRARY
router.post('/', function(req, res) {
  // console.log(req.body, 'req.body-POST');
  Library.create({
    title: req.body.title,
    author: req.body.author,
    pubDate: new Date(req.body.publishDate),
    genre: req.body.genre,
    rating: req.body.rating,
    numPages: req.body.numPages,
    cover: req.body.cover,
    synopsis: req.body.synopsis,
  }, function(err, book) {
    if (err)
      return res.status(500).send("There was a problem adding the information to the database.");
    res.status(200).send(book);
  });
});

// RETURNS ALL BOOKS IN THE DATABASE
router.get('/', function(req, res) {
  // console.log(res.body, 'red.body-GET ALL');
  Library.find({}, function(err, books) {
    if (err)
      return res.status(500).send("There was a problem finding books in library.");
    res.status(200).send(books);
  });
});

router.delete('/:id', function(req, res) {
  console.log(req.params.id, 'params');
  Library.findByIdAndRemove(req.params.id, (err, response) => {
    console.log(res, 'res');
    console.log(err, 'error');
    if (err) {
      return res.status(500).send(err)
    }
    res.status(200).send(response)
  })
});

// router.delete('/:id', function(req, res) {
//   // console.log(req.params.id, 'params');
//   Library.findByIdAndRemove(req.params.id, (err, response) => {
//     console.log(res, 'res');
//     console.log(err, 'error');
//     if (err) {
//       return res.status(500).send(err)
//     }
//     res.status(200).send(response)
//   })
// });

module.exports = router;
