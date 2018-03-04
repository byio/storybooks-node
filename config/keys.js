const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  mongoURI: process.env.MLAB_DB_URI,
  googleClientID: process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET
};
