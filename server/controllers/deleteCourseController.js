const Course = require('../models/Course');

exports.deleteCourse = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedCourse = await Course.findByIdAndDelete(id);

    if (!deletedCourse) {
      return res.status(404).json({ message: 'Course not found' });
    }

    res.status(200).json({ message: 'Course deleted successfully!' });
  } catch (error) {
    console.error('Error deleting course:', error.message);
    res.status(500).json({
      message: 'Failed to delete course',
      error: error.message,
    });
  }
};
