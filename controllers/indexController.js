// Load Story Model
const Story = require('../models/Story');

exports.renderHomePage = (req, res) => {
  res.render('index/welcome');
};

exports.renderDashboard = (req, res) => {
  Story.find({ user: req.user.id })
       .then(stories => {
         res.render('index/dashboard', { stories });
       });
};

exports.renderAboutPage = (req, res) => {
  res.render('index/about');
};
