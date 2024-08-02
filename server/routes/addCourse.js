const express = require('express');
const router = express.Router();
const { addCourse } = require('../controllers/addCourseController.js');

// POST route to add a new course
router.post('/add-course', addCourse);

module.exports = router;
