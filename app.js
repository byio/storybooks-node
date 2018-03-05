const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');

const keys = require('./config/keys');

const app = express();

// Mongoose Connect
mongoose.connect(keys.mongoURI)
        .then(() => {
          console.log('Connected to mLab mongoDB');
        })
        .catch(err => {
          if (err) throw err;
        });

// Sessions Middleware
app.use(session({
  secret: 'this secret can be any string',
  resave: false,
  saveUninitialized: false
}));

// Passport Config
require('./config/passport')(passport);

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

// Load Routes
const index = require('./routes/index');
const auth = require('./routes/auth');

// Use Routes
app.use('/', index);
app.use('/auth', auth);

// Port
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server started on port ${port}.`);
});
