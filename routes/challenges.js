const express = require("express");
const router = express.Router();
const Challenge = require("../models/Challenge");

// Get active challenges
router.get("/active", async (req, res) => {
  try {
    const challenges = await Challenge.find();
    res.json(challenges);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;