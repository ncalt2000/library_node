var express = require('express');
var bodyParser = require('body-parser');
var Library = require('../models/library.js');

var router = express.Router();
router.use(bodyParser({limit: '50mb'}));
router.use(bodyParser.urlencoded({extended: true}));

// CREATES A NEW BOOK IN LIBRARY
router.post('/', function(req, res) {
  console.log(req.body, 'req.body-POST');

  const bookPromises = req.body.bookshelf.map(item => {
    return Library.create({
      title: item.title,
      pages: item.pages || null,
      author: item.author,
      pubDate: new Date(item.publishDate) || "no date",
      genre: item.genre,
      rating: item.rating,
      cover: item.cover || "no cover",
      synopsis: item.synopsis,
    })
  })
  // because we iterate, it creates multiple promises which throws error: Headers already set!
  // get all promises and pass it in Promise.all()
  Promise.all(bookPromises).then((value) => {
    // console.log(value, "VALUE");
    return res.status(200).send(value);
  })
  .catch(err => {
    // console.log(err, "Error!");
    res.status(500).send("There was a problem adding book(s) to the database.")
  })
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
  // console.log(req.params.id, 'params');
  Library.findByIdAndRemove(req.params.id, (err, response) => {
    // console.log(res.body, 'res');
    // console.log(err, 'error');
    if (err) {
      return res.status(500).send(err)
    }
    res.status(200).send(response)
  })
});

router.put('/:id', function(req, res) {
  // console.log(req.body, "REQ.BODY");
  // console.log(req.params.id, "REQ.params");
  Library.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, response) => {
    // console.log(response, 'RESPONSE');
    if (err) {
      return res.status(500).send(err)
    }
    res.status(200).send(response)
  })
});

module.exports = router;
