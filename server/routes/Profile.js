// routes/profile.js
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/User');

router.get('/profile', async (req, res) => {
  const token = req.headers.authorization.split(' ')[1]; // Get token from header
  if (!token) return res.status(401).send('Access denied.');

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify token
    const user = await User.findById(decoded.userId).select('-password'); // Exclude password from response
    if (!user) return res.status(404).send('User not found.');
    res.send(user); // Send user details
  } catch (error) {
    res.status(400).send('Invalid token.');
  }
});

module.exports = router;
