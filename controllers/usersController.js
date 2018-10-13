var express = require('express');
var jwt = require('jsonwebtoken');
var bcryptjs = require('bcrypt');
var bodyParser = require('body-parser');
var Users = require('../models/users.js');
var router = express.Router();
var authSecret = require('../config/auth.js');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));

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
        var token = jwt.sign({ id: user._id }, authSecret.secret, {
          expiresIn: 86400 // expires in 24 hours
        });
        res.status(200).send({ auth: true, token: token, user: user.firstName});
      });
    }
  });
});


//LOGIN
router.post('/login', function(req, res) {
  // console.log(req.body, 'Body from LOGIN');
  Users.findOne({ email: req.body.email }, function (err, user) {
    // console.log(user, 'USER');
    if (err) return res.status(500).send({auth: false, msg: 'Error on the server.'});
    if (!user) return res.status(404).send({auth: false, msg: 'No user found.'});

    var passwordIsValid = bcryptjs.compareSync(req.body.password, user.password);
    if (!passwordIsValid) return res.status(200).send({ auth: false, token: null, msg: 'Your email or password is incorrect!' });

    var token = jwt.sign({ id: user._id }, authSecret.secret, {
      expiresIn: 86400 // expires in 24 hours
    });

    res.status(200).send({ auth: true, token: token, user: user.firstName });
  });
});

//LOGOUT
router.get('/logout', function(req, res) {
  res.status(200).send({ auth: false, token: null });
});

module.exports = router;
