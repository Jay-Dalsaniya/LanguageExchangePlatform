const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  language: { type: String, required: true },
  platform: { type: String, required: true },
  time: { type: String, required: true },
  fees: { type: Number, required: true },
  teacherPhoto: { type: String, required: true }, // Store the path to the photo if using file upload
  enrolled: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
