const express = require('express');

const router = express.Router();

// Load Controller
const auth_controller = require('../controllers/authController');

router.get('/google', auth_controller.googleAuth);
router.get('/google/callback', auth_controller.googleAuthCallbackFailure, auth_controller.googleAuthCallbackSuccess);
router.get('/verify', auth_controller.verifyAuth);

module.exports = router;
