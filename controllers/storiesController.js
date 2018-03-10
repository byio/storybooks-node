// Load Story Model
const Story = require('../models/Story');

exports.fetchAllStories = (req, res) => {
  Story.find({ status: "public" })
       .populate('user')
       .then(stories => {
         res.render('stories/index', { stories });
       });
};

exports.renderOneStory = (req, res) => {
  Story.findOne({ _id: req.params.id })
       .populate('user')
       .then(story => {
         console.log(story);
         res.render('stories/show', { story });
       });
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
