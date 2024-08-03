const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config(); // Load environment variables from .env file

const signupRoutes = require('./routes/signup');
const loginRoutes = require('./routes/login');
const forgotPasswordRoutes = require('./routes/forgotPassword'); // Import forgot password routes
const profileRoute = require('./routes/Profile');
const addCourseRoute = require('./routes/addCourse'); // Import add course route
const getCourseRoute = require('./routes/getCourse');
const deleteCourseRoute = require('./routes/deleteCourse'); // Import delete course route
const updateCourseRoute = require('./routes/updateCourse'); // Adjust the path as needed

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/signup', signupRoutes);
app.use('/api/login', loginRoutes);
app.use('/api', forgotPasswordRoutes); // Use forgot password routes
app.use('/api', profileRoute);
app.use('/api', addCourseRoute);
app.use('/api', getCourseRoute);
app.use('/api', deleteCourseRoute); // Register delete course route
app.use('/api', updateCourseRoute);


// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



