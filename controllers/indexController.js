exports.renderHomePage = (req, res) => {
  res.render('index/welcome');
};

exports.renderDashboard = (req, res) => {
  res.render('index/dashboard');
};

exports.renderAboutPage = (req, res) => {
  res.render('index/about');
};
