const express = require('express');

const router = express.Router();

// Load Controller
const auth_controller = require('../controllers/authController');

router.get('/google', auth_controller.googleAuth);

module.exports = router;
