// Load Story Model
const Story = require('../models/Story');

exports.fetchAllStories = (req, res) => {
  Story.find({ status: "public" })
       .populate('user')
       .sort({ date: 'desc' })
       .then(stories => {
         res.render('stories/index', { stories });
       });
};

exports.renderOneStory = (req, res) => {
  Story.findOne({ _id: req.params.id })
       .populate('user')
       .populate('comments.commentUser')
       .then(story => {
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

exports.renderEditStoryForm = (req, res) => {
  Story.findOne({ _id: req.params.id })
       .then(story => {
         // only story's author can access its edit form page
         if (story.user != req.user.id) {
          res.redirect('/stories');
         } else {
          res.render('stories/edit', { story });
         }
       });
};

exports.updateStory = (req, res) => {
  Story.findOne({ _id: req.params.id })
       .then(story => {
         // set new values
         story.title = req.body.title;
         story.body = req.body.body;
         story.status = req.body.status;
         story.allowComments = !!req.body.allowComments;
         // saving update
         story.save()
              .then(story => {
                res.redirect('/dashboard');
              })
       });
};

exports.delStory = (req, res) => {
  Story.findOneAndRemove({
    _id: req.params.id,
    user: req.user.id
  }).then(() => {
    res.redirect('/dashboard');
  });
};

exports.addComment = (req, res) => {
  Story.findOne({ _id: req.params.id })
       .then(story => {
         // define new comment
         const newComment = {
           commentBody: req.body.commentBody,
           commentUser: req.user.id
         };
         // add new comment to comments array (add to front of array)
         story.comments.unshift(newComment);
         // save comment to db
         story.save()
              .then(story => {
                res.redirect(`/stories/show/${story.id}`);
              });
       });
};
