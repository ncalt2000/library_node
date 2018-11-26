var mongoose = require('mongoose');

var UsersSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  userID:  {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
});

mongoose.model('Users', UsersSchema);

module.exports = mongoose.model('Users');
