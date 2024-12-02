const mongoose = require("mongoose");

const FriendSchema = new mongoose.Schema({
  name: { type: String, required: true },
  steps_today: { type: Number, required: true },
});

module.exports = mongoose.model("Friend", FriendSchema);