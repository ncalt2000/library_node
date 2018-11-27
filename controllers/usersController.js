import express from 'express';
import jwt from 'jsonwebtoken';
import bcryptjs from 'bcryptjs';
import bodyParser from 'body-parser';
import Users from '../models/users.js';
import { createJWToken } from '../libs/auth';

const router = express.Router();

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
        password : hashedPassword,
      },
      function (err, user) {
        // console.log(user, "USER");
        if (err) return res.status(500).send('There was a problem registering the user.');
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

    var token = createJWToken({ id: user._id });

    res.status(200).send({ auth: true, token: token, user: user.firstName });
  });
});

//LOGOUT
router.get('/logout', function(req, res) {
  res.status(200).send({ auth: false, token: null });
});

module.exports = router;
