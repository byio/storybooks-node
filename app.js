const express = require('express');

const app = express();

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
