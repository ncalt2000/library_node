var express = require('express');
var bodyParser = require('body-parser');
var Library = require('../models/library.js');
var jwt = require('jsonwebtoken');
var authSecret = process.env.SECRET;
var Users = require('../models/users.js');

var router = express.Router();
router.use(bodyParser({limit: '50mb'}));
router.use(bodyParser.urlencoded({extended: true}));

// Middleware to verify the token
const authenticationMiddleware = (req, res, next) => {
  var token = req.headers['x-access-token'];
  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });

  jwt.verify(token, authSecret, function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });

    Users.findById(decoded.id,
      { password: 0 }, // projection
      function (err, user) {
        if (err) return res.status(500).send('There was a problem finding the user.');
        if (!user) return res.status(404).send('No user found.');

        next();
      });
  });
};

// CREATES A NEW BOOK IN LIBRARY
router.post('/', authenticationMiddleware, function(req, res) {
  // console.log(req.body, 'req.body-POST');
  Library.insertMany(req.body.bookshelf, function(err, books) {
    if (err) return res.status(500).send('There was a problem adding books in library.');
    res.status(200).send({success: true, books});
  });
});

// RETURNS ALL BOOKS IN THE DATABASE
router.get('/', function(req, res) {
  // console.log('get all books route');
  Library.find({}, function(err, books) {
    if (err) return res.status(500).send('There was a problem finding books in library.');
    // eslint-disable-next-line
    // console.log('get all books success');
    res.status(200).send(books);
  });
});

router.delete('/:id', authenticationMiddleware, function(req, res) {
  // console.log(req.params.id, 'params');
  Library.findByIdAndRemove(req.params.id, (err, response) => {
    // console.log(res.body, 'res');
    // console.log(err, 'error');
    if (err) {
      return res.status(500).send(err);
    }
    res.status(200).send(response);
  });
});

router.put('/:id', authenticationMiddleware, function(req, res) {
  // eslint-disable-next-line no-console
  // console.log('put book');
  // console.log(req.body, "REQ.BODY");
  // console.log(req.params.id, "REQ.params");
  Library.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, response) => {
    // console.log(response, 'RESPONSE');
    if (err) {
      return res.status(500).send(err);
    }
    res.status(200).send(response);
  });
});

module.exports = router;
