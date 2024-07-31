const User = require('../models/User');
const jwt = require('jsonwebtoken');

exports.forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: 'User with this email does not exist.' });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '15m' });

    // Here you would typically send an email with the token to the user

    res.status(200).json({ message: 'Email verified. Please enter your new password.', token });
  } catch (err) {
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
    res.status(500).json({ message: 'Server error' });
  }
};
