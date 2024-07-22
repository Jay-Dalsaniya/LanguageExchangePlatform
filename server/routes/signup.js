// routes/signup.js
const express = require('express');
const router = express.Router();
const { signup } = require('../controllers/signupController');

// Signup route
router.post('/', signup);

module.exports = router;
