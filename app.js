const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const exphbs = require('express-handlebars');

const keys = require('./config/keys');
const { truncate, stripTags, formatDate, select } = require('./helpers/hbs');

const app = express();

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Method Override Middleware
app.use(methodOverride('_method'));

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

// Global Variables Middleware
app.use((req, res, next) => {
  res.locals.user = req.user || null;
  res.locals.currentYear = new Date().getFullYear();
  next();
});

// Handlebars Middleware
app.engine('hbs', exphbs({
  helpers: {
    truncate,
    stripTags,
    formatDate,
    select
  },
  defaultLayout: 'main', extname: '.hbs'
}));
app.set('view engine', 'hbs');

// Express Static Middleware (route for static resources)
app.use(express.static(path.join(__dirname, 'public')));

// Load Routes
const index = require('./routes/index');
const auth = require('./routes/auth');
const stories = require('./routes/stories');

// Use Routes
app.use('/', index);
app.use('/auth', auth);
app.use('/stories', stories);

// Port
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server started on port ${port}.`);
});
