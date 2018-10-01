var express = require('express');
var app = express();
var cors = require('cors');
var db = require('./db');
// var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var morgan = require ('morgan');
var jwt = require('jsonwebtoken');
var config = require('./config/passport.js');

var LibraryController = require('./controllers/libraryController')
var UsersController = require('./controllers/usersController')

//CORS Access lift (we eventually want to add security using JWT and whitelist our platforms)
app.use(cors());

// app.use(passport.initialize());



//Include Controller Routes
// http://127.0.0.1:3002/Library
app.use('/Library', LibraryController);
app.use('/user', UsersController);

module.exports = app;
