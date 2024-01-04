const express = require('express');
const router = express.Router();
const passport = require('passport');

router.post('/login', passport.authenticate('local'), (req, res) => {
  res.json({ message: 'Login successful' });
});

// Add registration and logout routes here

module.exports = router;
