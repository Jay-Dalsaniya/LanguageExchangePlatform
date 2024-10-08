// controllers/loginController.js
const User = require('../models/User');
const jwt = require('jsonwebtoken');

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user
    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });

    // Include user details in response
    res.status(200).json({
      token,
      role: user.role,
      user: user.toObject({ getters: true, versionKey: false, transform: (doc, ret) => { delete ret.password; return ret; } })
    });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};
