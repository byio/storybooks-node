exports.renderHomePage = (req, res) => {
  res.render('index/welcome');
};

exports.renderDashboard = (req, res) => {
  res.render('index/dashboard');
};
