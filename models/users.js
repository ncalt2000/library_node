import mongoose from 'mongoose';

const UsersSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
});

mongoose.model('Users', UsersSchema);

module.exports = mongoose.model('Users');
