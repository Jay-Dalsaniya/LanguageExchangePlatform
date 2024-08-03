const Course = require('../models/Course');

exports.getCourse = async (req, res) => {
  try {
    const courses = await Course.find(); // Fetch all courses
    res.status(200).json(courses);
  } catch (error) {
    console.error('Error fetching courses:', error.message);
    res.status(500).json({
      message: 'Failed to fetch courses',
      error: error.message,
    });
  }
};
