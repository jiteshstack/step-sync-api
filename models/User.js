const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  daily_goal: { type: Number, required: true },
  steps_today: { type: Number, required: true },
  percentage_completed: { type: Number, required: true },
});

module.exports = mongoose.model("User", UserSchema);