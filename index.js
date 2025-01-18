const express = require("express");
const mongoose = require("mongoose");

const app = express();

// MongoDB Atlas connection
mongoose
  .connect(
    "mongodb+srv://namankukreja01:namankukreja@cluster0.idk2n9q.mongodb.net/"
  )
  .then(() => console.log("Successfully connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Start the Express server
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
