// controllers/signupController.js
const User = require('../models/User');

exports.signup = async (req, res) => {
  try {
    const { firstName, lastName, email, password, birthDate, gender, mobileNumber, role, region } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create new user
    const newUser = new User({
      firstName,
      lastName,
      email,
      password,
      birthDate,
      gender,
      mobileNumber,
      role,
      region
    });

    // Save user to the database
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

