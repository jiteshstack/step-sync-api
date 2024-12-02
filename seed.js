const mongoose = require("mongoose");
const connectDB = require("./db");
const User = require("./models/User");

const seed = async () => {
  await connectDB();
  await User.create({
    daily_goal: 10000,
    steps_today: 9281,
    percentage_completed: 78,
  });
  console.log("Database seeded successfully!");
  process.exit();
};

seed();
