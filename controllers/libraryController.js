import express from 'express';
import bodyParser from 'body-parser';
import Library from '../models/library.js';
import jwt from 'jsonwebtoken';
import Users from '../models/users.js';
import { verifyJWT_MW } from '../middleware';

const router = express.Router();

router.use(bodyParser({limit: '50mb'}));
router.use(bodyParser.urlencoded({extended: true}));


router.get('/', function(req, res) {
  Library.find({}, function(err, books) {
    if (err) return res.status(500).send('There was a problem finding books in library.');
    res.status(200).send(books);
  });
});

router.all('*', verifyJWT_MW);

// CREATES A NEW BOOK IN LIBRARY
router.post('/', function(req, res) {
  // console.log(req.body.bookshelf, 'req.body-POST');
  Library.insertMany(req.body.bookshelf, function(err, books) {
    if (err) return res.status(500).send('There was a problem adding books in library.');
    res.status(200).send({success: true, books});
  });
});

router.delete('/:id', function(req, res) {
  Library.findByIdAndRemove(req.params.id, (err, response) => {
    if (err) {
      return res.status(400).send(err);
    }
    res.status(200).send(response);
  });
});

router.put('/:id', function(req, res) {
  Library.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, response) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.status(200).send(response);
  });
});

module.exports = router;
