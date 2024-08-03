const express = require('express');
const router = express.Router();
const { getCourse } = require('../controllers/getCourseController');

// Route to get courses
router.get('/get-course', getCourse);

module.exports = router;
