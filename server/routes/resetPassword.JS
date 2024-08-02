// // routes/checkEmail.js
// const express = require('express');
// const router = express.Router();
// const User = require('../models/User');

// router.post('/', async (req, res) => {
//   const { email } = req.body;
//   const user = await User.findOne({ email });
//   if (user) {
//     return res.status(200).json({ exists: true });
//   } else {
//     return res.status(200).json({ exists: false });
//   }
// });

// module.exports = router;

// routes/resetPassword.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/', async (req, res) => {
  const { email, newPassword } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }
    user.password = newPassword; // Directly set the new password
    await user.save(); // Save the updated user
    return res.status(200).json({ message: 'Password has been reset successfully' });
  } catch (err) {
    return res.status(500).json({ message: 'Error updating password' });
  }
});

module.exports = router;
