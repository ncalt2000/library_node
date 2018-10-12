var express = require('express');
var bodyParser = require('body-parser');
var Library = require('../models/library.js');
var jwt = require('jsonwebtoken');
var bcryptjs = require('bcrypt');
var authSecret = require('../config/auth.js');
var Users = require('../models/users.js');

var router = express.Router();
router.use(bodyParser({limit: '50mb'}));
router.use(bodyParser.urlencoded({extended: true}));

// Middleware to verify the token
const authenticationMiddleware = (req, res, next) => {
  console.log(req.headers, 'HEADRES');
  var token = req.headers['x-access-token'];
  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });

  jwt.verify(token, authSecret.secret, function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });

    Users.findById(decoded.id,
      { password: 0 }, // projection
      function (err, user) {
        if (err) return res.status(500).send("There was a problem finding the user.");
        if (!user) return res.status(404).send("No user found.");

        next();
    });
  });
}

// CREATES A NEW BOOK IN LIBRARY
router.post('/', authenticationMiddleware, function(req, res) {
  // console.log(req.body, 'req.body-POST');
  // console.log(req.body.bookshelf, 'BOOKSHELF to itirate');

  const bookPromises = req.body.bookshelf.map(item => {
    // console.log(item, "One book");
    return Library.create({
      title: item.title,
      pages: item.pages || null,
      author: item.author,
      pubDate: new Date(item.publishDate) || "no date",
      genre: item.genre,
      rating: item.rating,
      cover: item.cover,
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
    console.log(err, "Error!");
    res.status(500).send("There was a problem adding book(s) to the database.")
  })
});

// RETURNS ALL BOOKS IN THE DATABASE
router.get('/', function(req, res) {
  console.log('get all books');
  // console.log(res.body, 'red.body-GET ALL');
  Library.find({}, function(err, books) {
    if (err)
      return res.status(500).send("There was a problem finding books in library.");
    console.log('get all books success');
    res.status(200).send(books);
  });
});

router.delete('/:id', authenticationMiddleware, function(req, res) {
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

router.put('/:id', authenticationMiddleware, function(req, res) {
  console.log('put book');
  // console.log(req.body, "REQ.BODY");
  // console.log(req.params.id, "REQ.params");
  Library.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, response) => {
    // console.log(response, 'RESPONSE');
    if (err) {
      return res.status(500).send(err)
    }
    console.log('put book success');
    res.status(200).send(response)
  })
});

module.exports = router;
