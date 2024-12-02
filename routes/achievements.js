const express = require("express");
const router = express.Router();
const Achievement = require("../models/Achievement");

// Get recent achievements
router.get("/recent", async (req, res) => {
  try {
    const achievements = await Achievement.find();
    res.json(achievements);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add a new achievement
router.post("/", async (req, res) => {
  const { title, description } = req.body;
  try {
    const achievement = new Achievement({ title, description });
    await achievement.save();
    res.status(201).json({ message: "Achievement added successfully." });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;