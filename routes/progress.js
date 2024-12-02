const express = require("express");
const router = express.Router();
const User = require("../models/User");

// Get today's progress
router.get("/today", async (req, res) => {
  try {
    const user = await User.findOne(); // Fetch the first user
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;