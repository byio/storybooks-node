const express = require('express');

const router = express.Router();

// Import Helpers
const { ensureAuthenticated } = require('../helpers/auth');

// Load Controllers
const stories_controller = require('../controllers/storiesController');

// /stories Routes
router.get('/', stories_controller.fetchAllStories);
router.get('/add', ensureAuthenticated, stories_controller.renderAddStoryForm);
router.post('/', ensureAuthenticated, stories_controller.addStory);
router.get('/show/:id', stories_controller.renderOneStory);
router.get('/edit/:id', ensureAuthenticated, stories_controller.renderEditStoryForm);
router.put('/:id', ensureAuthenticated, stories_controller.updateStory);
router.delete('/:id', ensureAuthenticated, stories_controller.delStory);

// Export Module
module.exports = router;
