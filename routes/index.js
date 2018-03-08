const express = require('express');

const router = express.Router();

// Import Helpers
const { ensureAuthenticated, ensureGuest } = require('../helpers/auth');

// Load Controllers
const index_controller = require('../controllers/indexController');

// / Routes
router.get('/', ensureGuest, index_controller.renderHomePage);
router.get('/dashboard', ensureAuthenticated, index_controller.renderDashboard);

// Export Module
module.exports = router;
