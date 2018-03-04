const express = require('express');

const router = express.Router();

// Load Controllers
const index_controller = require('../controllers/indexController');

// / Routes
router.get('/', index_controller.renderHomePage);

// Export Module
module.exports = router;
