const passport = require('passport');
const LocalStrategy = require('passport-local');
const Users = require('../models/users.js');

passport.use(new LocalStrategy({
  username: 'user[email]',
  password: 'user[password]',
}, (email, password, done) => {
  Users.findOne({ email })
    .then((user) => {
      if(!user || !user.validatePassword(password)) {
        return done(null, false, { errors: { 'email or password': 'is invalid' } });
      }

      return done(null, user);
    }).catch(done);
}));
