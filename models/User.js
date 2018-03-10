const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Define User Schema
const UserSchema = new Schema({
  googleID: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  image: {
    type: String
  }
});

// Create User Model from User Schema, and Export Module
module.exports = mongoose.model('User', UserSchema);
