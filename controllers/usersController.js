var express = require('express');
var jwt = require('jsonwebtoken');
var bcryptjs = require('bcryptjs');
var bodyParser = require('body-parser');
var Users = require('../models/users.js');
var router = express.Router();
var authSecret = process.env.SECRET;
var _ = require('lodash');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));

function createJWToken(details)
{
  if (typeof details !== 'object')
  {
    details = {};
  }
  if (!details.maxAge || typeof details.maxAge !== 'number')
  {
    details.maxAge = 3600;
  }
  details.sessionData = _.reduce(details.sessionData || {}, (memo, val, key) =>
  {
    if (typeof val !== "function" && key !== "password")
    {
      memo[key] = val;
    }
    return memo;
  }, {});
  let token = jwt.sign({
     data: details.sessionData
    }, authSecret, {
      expiresIn: details.maxAge,
      algorithm: 'HS256'
  });
  return token;
}


//Register/Create new user
router.post('/register', function(req, res) {
  // console.log(req.body, "BODY");
  var hashedPassword = bcryptjs.hashSync(req.body.password, 8);
  Users.findOne({ email: req.body.email }, function (err, user) {
    // console.log(user, "USER");
    // console.log(user, 'USER EXIST');
    if (err) return res.status(500).send('Error on the server.');
    if (user) return res.status(200).send({ auth: false, msg: 'This email already registered!' });
    if(!user){
      Users.create({
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        email : req.body.email,
        password : hashedPassword
      },
      function (err, user) {
        // console.log(user, "USER");
        if (err) return res.status(500).send('There was a problem registering the user.');
        // create a token
        // var token = jwt.sign({ id: user._id }, authSecret, {
        //   expiresIn: 36000 // expires in 10 hours
        // });
        var token = createJWToken({ id: user._id });
        res.status(200).send({ auth: true, token: token, user: user.firstName});
      });
    }
  });
});


//LOGIN
router.post('/login', function(req, res) {
  Users.findOne({ email: req.body.email }, function (err, user) {
    // console.log(user, 'USER');
    if (err) return res.status(500).send({auth: false, msg: 'Error on the server.'});
    if (!user) return res.status(404).send({auth: false, msg: 'No user found.'});

    var passwordIsValid = bcryptjs.compareSync(req.body.password, user.password);
    if (!passwordIsValid) return res.status(200).send({ auth: false, token: null, msg: 'Your email or password is incorrect!' });

    // var token = jwt.sign({ id: user._id }, authSecret, {
    //   expiresIn: 36000 // expires in 10 hours
    // });
    var token = createJWToken({ id: user._id });

    res.status(200).send({ auth: true, token: token, user: user.firstName });
  });
});

//LOGOUT
router.get('/logout', function(req, res) {
  res.status(200).send({ auth: false, token: null });
});

module.exports = router;
