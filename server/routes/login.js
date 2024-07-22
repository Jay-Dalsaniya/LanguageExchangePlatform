// routes/login.js
const express = require('express');
const router = express.Router();
const { login } = require('../controllers/loginController');

// Login route
router.post('/', login);

module.exports = router;
