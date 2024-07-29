// controllers/forgotPasswordController.js
const User = require('../models/User');
const jwt = require('jsonwebtoken');

exports.forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    console.log(`Received request to reset password for email: ${email}`); // Debug log

    const user = await User.findOne({ email });

    if (!user) {
      console.log(`No user found with email: ${email}`); // Debug log
      return res.status(400).json({ message: 'User with this email does not exist.' });
    }

    // Generate a token to verify the user later (optional for extra security)
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '15m' });

    res.status(200).json({ message: 'Email verified. Please enter your new password.', token });
  } catch (err) {
    console.error('Error in forgot password:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.resetPassword = async (req, res) => {
  try {
    const { token } = req.params;
    const { newPassword } = req.body;

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.userId);

    if (!user) {
      return res.status(400).json({ message: 'User not found.' });
    }

    user.password = newPassword; // Update with new password
    await user.save();

    res.status(200).json({ message: 'Password updated successfully. Please login.' });
  } catch (err) {
    console.error('Error in resetting password:', err);
    res.status(500).json({ message: 'Server error' });
  }
};
