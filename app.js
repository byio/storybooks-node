const express = require('express');
const passport = require('passport');

const app = express();

// Passport Config
require('./config/passport')(passport);

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
