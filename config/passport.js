const GoogleStrategy = require('passport-google-oauth20').Strategy;

const User = require('../models/User');
const keys = require('./keys');

module.exports = (passport) => {
  passport.use(
    new GoogleStrategy({
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true
    }, (accessToken, refreshToken, profile, done) => {
      // check if user exists in db
      User.findOne({ googleID: profile.id })
          .then(user => {
            // case: user exists
            if (user) {
              done(null, user);
            } else {
              // case: new user
              const imageURL = profile.photos[0].value;
              const image = imageURL.substring(0, imageURL.indexOf('?'));
              const newUser = new User({
                googleID: profile.id,
                firstName: profile.name.givenName,
                lastName: profile.name.familyName,
                email: profile.emails[0].value,
                image
              });
              newUser.save()
                     .then(user => {
                       done(null, user)
                     });
            }
          });
    })
  );
};
