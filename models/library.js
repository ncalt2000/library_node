import mongoose from 'mongoose';

const LibrarySchema = new mongoose.Schema({
  cover: String, //Base64 Encoded
  title: String,
  author: String,
  genre: String,
  pages: Number,
  publishDate: Date,
  rating: Number,
  synopsis: String,
  userID:  {type: mongoose.Schema.Types.ObjectId, ref: 'Users'}
});
mongoose.model('Library', LibrarySchema);

module.exports = mongoose.model('Library');
