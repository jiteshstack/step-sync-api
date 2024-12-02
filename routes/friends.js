const express = require("express");
const router = express.Router();
const Friend = require("../models/Friend");

// Get friends' activity
router.get("/activity", async (req, res) => {
  try {
    const friends = await Friend.find();
    res.json(friends);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;