const express = require('express');

const router = express.Router();

// Load Controllers
const stories_controller = require('../controllers/storiesController');

// /stories Routes
router.get('/', stories_controller.fetchAllStories);
router.get('/add', stories_controller.renderAddStoryForm);
router.post('/', stories_controller.addStory);
router.get('/show/:id', stories_controller.renderOneStory);
router.get('/edit/:id', stories_controller.renderEditStoryForm);
router.put('/:id', stories_controller.updateStory);
router.delete('/:id', stories_controller.delStory);

// Export Module
module.exports = router;
