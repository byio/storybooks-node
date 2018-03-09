// Load Story Model
const Story = require('../models/Story');

exports.renderAllStories = (req, res) => {};

exports.renderOneStory = (req, res) => {
  res.send(`showing story with id ${req.params.id}`);
};

exports.renderAddStoryForm = (req, res) => {
  res.render('stories/add');
};

exports.addStory = (req, res) => {
  // create new story object
  const newStory = new Story({
    title: req.body.title,
    body: req.body.body,
    status: req.body.status,
    allowComments: !!req.body.allowComments,
    user: req.user.id
  });
  // save new story object to db
  newStory.save()
          .then(story => {
            res.redirect(`/stories/show/${story._id}`);
          });
};

exports.renderEditStoryForm = (req, res) => {};

exports.updateStory = (req, res) => {};

exports.delStory = (req, res) => {};
