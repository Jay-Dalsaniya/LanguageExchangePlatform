const express = require('express');
const router = express.Router();
const { deleteCourse } = require('../controllers/deleteCourseController');

// Route to delete a course
router.delete('/delete-course/:id', deleteCourse);

module.exports = router;
