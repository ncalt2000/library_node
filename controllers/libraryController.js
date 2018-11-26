var express = require('express');
var bodyParser = require('body-parser');
var Library = require('../models/library.js');
var jwt = require('jsonwebtoken');
var authSecret = process.env.SECRET;
var Users = require('../models/users.js');

var router = express.Router();
router.use(bodyParser({limit: '50mb'}));
router.use(bodyParser.urlencoded({extended: true}));


function verifyJWT_MW(req, res, next){
  // (req.method === 'POST'); we could check method
  let token = req.headers['x-access-token'];
  verifyJWTToken(token)
    .then((decodedToken) => {
      req.user = decodedToken.data;
      // console.log(req.user);
      next();
    })
    .catch((err) => {
      res.status(400)
        .json({auth: false, token: null, message: "Invalid auth token provided."});
    });
};

function verifyJWTToken(token) {
  return new Promise((resolve, reject) => {
    jwt.verify(token, authSecret, (err, decodedToken) => {
      if (err || !decodedToken) {
        return reject(err);
      }
      resolve(decodedToken);
    });
  });
}

// CREATES A NEW BOOK IN LIBRARY
router.post('/', verifyJWT_MW, function(req, res) {
  // console.log(req.body.bookshelf, 'req.body-POST');
  Library.insertMany(req.body.bookshelf, function(err, books) {
    if (err) return res.status(500).send('There was a problem adding books in library.');
    res.status(200).send({success: true, books});
  });
});

router.get('/', function(req, res) {
  Library.find({}, function(err, books) {
    if (err) return res.status(500).send('There was a problem finding books in library.');
    res.status(200).send(books);
  });
});

router.delete('/:id', verifyJWT_MW, function(req, res) {
  Library.findByIdAndRemove(req.params.id, (err, response) => {
    if (err) {
      return res.status(400).send(err);
    }
    res.status(200).send(response);
  });
});

router.put('/:id', verifyJWT_MW, function(req, res) {
  Library.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, response) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.status(200).send(response);
  });
});

module.exports = router;
