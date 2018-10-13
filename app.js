var express = require('express');
var app = express();
var cors = require('cors');
// eslint-disable-next-line
var db = require('./config/db');


var LibraryController = require('./controllers/libraryController');
var UsersController = require('./controllers/usersController');

//CORS Access lift (we eventually want to add security using JWT and whitelist our platforms)
app.use(cors());
app.use(express.static('public'));

//Include Controller Routes
// http://127.0.0.1:3002/Library
app.use('/library', LibraryController);
app.use('/user', UsersController);

module.exports = app;
