const passport = require('passport');

exports.googleAuth = passport.authenticate('google', {
  scope: [
    'profile',
    'email'
  ]
});

exports.googleAuthCallbackFailure = passport.authenticate('google', {
  failureRedirect: '/'
});

exports.googleAuthCallbackSuccess = (req, res) => {
  res.redirect('/dashboard');
};
