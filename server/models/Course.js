// models/Course.js
const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  courseName: { type: String, required: true },
  language: { type: String, required: true },
  subject: { type: String, required: true },
  platform: { type: String, required: true },
  time: { type: String, required: true },
  fees: { type: String, required: true },
  aboutCourse: { type: String, required: true }
});

module.exports = mongoose.model('Course', courseSchema);
