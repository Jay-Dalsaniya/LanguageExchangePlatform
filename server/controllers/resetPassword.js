// controllers/forgotPasswordController.js
exports.resetPassword = async (req, res) => {
    try {
      const { token } = req.params;
      const { newPassword } = req.body;
  
      // Verify the token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const user = await User.findById(decoded.userId);
  
      if (!user) {
        return res.status(400).json({ message: 'Invalid token.' });
      }
  
      // Update the user's password
      user.password = newPassword; // This will hash the password in the pre-save hook
      await user.save();
  
      res.status(200).json({ message: 'Password has been reset successfully.' });
    } catch (err) {
      console.error('Error in reset password:', err);
      res.status(500).json({ message: 'Server error' });
    }
  };
  
  