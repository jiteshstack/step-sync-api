const mongoose = require("mongoose");

const AchievementSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
});

module.exports = mongoose.model("Achievement", AchievementSchema);