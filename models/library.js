// Library.js
var mongoose = require('mongoose');
var LibrarySchema = new mongoose.Schema({
  cover: String, //Base64 Encoded
  title: String,
  author: String,
  genre: String,
  numPages: Number,
  pubDate: Date,
  rating: Number,
  synopsis: String,
});
mongoose.model('Library', LibrarySchema);

module.exports = mongoose.model('Library');
