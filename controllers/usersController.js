var express = require('express');
var app = express();
var jwt = require('jsonwebtoken');
var bcryptjs = require('bcrypt');
var bodyParser = require('body-parser');
var Users = require('../models/users.js');
var router = express.Router();
var authSecret = require('../config/auth.js');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));

//Register/Create new user
//req.body: {
//     "firstName" : "Ian",
//     "lastName": "Strouse",
//     "email": "ian.strouse@gmail.com",
//     "password" : "blah"
// }
router.post('/register', function(req, res) {
  console.log(req.body, "BODY");
  var hashedPassword = bcryptjs.hashSync(req.body.password, 8);
  Users.create({
    firstName : req.body.firstName,
    lastName : req.body.lastName,
    email : req.body.email,
    password : hashedPassword
  },
  function (err, user) {
    console.log(user, 'USER');
    if (err) return res.status(500).send("There was a problem registering the user.")

    // create a token
    var token = jwt.sign({ id: user._id }, authSecret.secret, {
      expiresIn: 86400 // expires in 24 hours
    });

    res.status(200).send({ auth: true, token: token});
  });
});

//Check User Access Token //NEEDS CLARIFICATION!!!
router.get('/me', function(req, res) {
  console.log(req.body, 'REQ');
  console.log(res.body, "RES");
  var token = req.headers['x-access-token'];
  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });

  jwt.verify(token, authSecret.secret, function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });

    User.findById(decoded.id,
      { password: 0 }, // projection
      function (err, user) {
        if (err) return res.status(500).send("There was a problem finding the user.");
        if (!user) return res.status(404).send("No user found.");

        res.status(200).send(user);
    });
  });
});

//LOGIN
//req.body = { email: 'natalia_calt@yahoo.com', password: 'password' }
//if OK, res.send {
//     "auth": true,
//     "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCIU..."
// }
router.post('/login', function(req, res) {
  Users.findOne({ email: req.body.email }, function (err, user) {
    if (err) return res.status(500).send('Error on the server.');
    if (!user) return res.status(404).send('No user found.');

    var passwordIsValid = bcryptjs.compareSync(req.body.password, user.password);
    if (!passwordIsValid) return res.status(401).send({ auth: false, token: null });

    var token = jwt.sign({ id: user._id }, authSecret.secret, {
      expiresIn: 86400 // expires in 24 hours
    });

    res.status(200).send({ auth: true, token: token });
  });
});

//LOGOUT
//if OK, res.send {
//     "auth": false,
//     "token": null
// }
router.get('/logout', function(req, res) {
  res.status(200).send({ auth: false, token: null });
});



module.exports = router;
