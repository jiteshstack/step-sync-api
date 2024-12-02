const express = require("express");
const cors = require("cors");
const connectDB = require("./db");

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/progress", require("./routes/progress"));
app.use("/api/challenges", require("./routes/challenges"));
app.use("/api/achievements", require("./routes/achievements"));
app.use("/api/friends", require("./routes/friends"));

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});