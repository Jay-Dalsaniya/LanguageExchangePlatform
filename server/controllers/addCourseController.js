const Course = require('../models/Course');

exports.addCourse = async (req, res) => {
  try {
    const { courseName, language, subject, platform, time, fees, aboutCourse } = req.body;

    // Validate all required fields
    if (!courseName || !language || !subject || !platform || !time || !fees || !aboutCourse) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const newCourse = new Course({
      courseName,
      language,
      subject,
      platform,
      time,
      fees,
      aboutCourse,
    });

    await newCourse.save();
    res.status(201).json({ message: 'Course added successfully!' });
  } catch (error) {
    console.error('Error adding course:', error.message); // Log the error message
    res.status(500).json({
      message: 'Failed to add course',
      error: error.message,  // Send the error message for debugging
    });
  }
};
