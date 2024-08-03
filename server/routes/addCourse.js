// routes/addCourse.js
const express = require('express');
const router = express.Router();
const { addCourse } = require('../controllers/addCourseController');

// Add course route
router.post('/add-course', addCourse);

module.exports = router;
