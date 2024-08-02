const express = require('express');
const router = express.Router();
const { getProfile } = require('../controllers/profileController');

// Get profile route
router.get('/profile', getProfile);

module.exports = router;
