const express = require('express');
const Course = require('../models/Course'); // Import your Course model
const router = express.Router();

// POST route to add a new course
router.post('/add-course', async (req, res) => {
  try {
    const { language, platform, time, fees, teacherPhoto } = req.body; // Get data from the request body
    const newCourse = new Course({ language, platform, time, fees, teacherPhoto });

    await newCourse.save(); // Save to the database

    res.status(201).json({ message: 'Course added successfully', course: newCourse });
  } catch (error) {
    res.status(500).json({ message: 'Error adding course', error: error.message });
  }
});

module.exports = router;
