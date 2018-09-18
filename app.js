var express = require('express');
var app = express();
var cors = require('cors');
var db = require('./db');
var LibraryController = require('./controllers/libraryController')

//CORS Access lift (we eventually want to add security using JWT and whitelist our platforms)
app.use(cors());

//Include Controller Routes
// http://127.0.0.1:3002/Library
app.use('/Library', LibraryController);

module.exports = app;
