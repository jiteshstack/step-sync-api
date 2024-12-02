const mongoose = require("mongoose");

const ChallengeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  steps_today: { type: Number, required: true },
  position: { type: Number, required: true },
  total_participants: { type: Number, required: true },
});

module.exports = mongoose.model("Challenge", ChallengeSchema);