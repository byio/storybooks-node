const passport = require('passport');

exports.googleAuthLogin = passport.authenticate('google', {
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

exports.verifyAuth = (req, res) => {
  if (req.user) {
    res.send(req.user);
  } else {
    res.send('Not authenticated.');
  }
};

exports.googleAuthLogout = (req, res) => {
  req.logout();
  res.redirect('/');
};
