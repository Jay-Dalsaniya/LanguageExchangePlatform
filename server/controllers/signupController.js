// controllers/signupController.js
const User = require('../models/User');
const jwt = require('jsonwebtoken');

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

    // Generate JWT token
    const token = jwt.sign({ userId: newUser._id, role: newUser.role }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(201).json({
      message: 'User registered successfully',
      token,
      user: newUser.toObject({ getters: true, versionKey: false, transform: (doc, ret) => { delete ret.password; return ret; } })
    });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};
