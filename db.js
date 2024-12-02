const mongoose = require("mongoose");

// Replace with your MongoDB connection string
const MONGO_URI = "mongodb://localhost:27017/step-sync-db";

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected...");
  } catch (err) {
    console.error("Database connection failed:", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;