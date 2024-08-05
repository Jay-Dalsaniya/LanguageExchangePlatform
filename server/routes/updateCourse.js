const express = require('express');
const router = express.Router();
const { updateCourse } = require('../controllers/updateCourseController');

router.put('/update-course/:id', updateCourse);

module.exports = router;
