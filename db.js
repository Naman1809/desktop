const mongoose = require("mongoose");
mongoose.connect(
    "mongodb+srv://namankukreja01:4YE5p3wMSlyEmwwJ@cluster0.idk2n9q.mongodb.net/todos"
  ) .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));// mongodb+srv://namankukreja01:4YE5p3wMSlyEmwwJ@cluster0.idk2n9q.mongodb.net/
const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model('todos', todoSchema);
module.exports = {
  todo,
};
