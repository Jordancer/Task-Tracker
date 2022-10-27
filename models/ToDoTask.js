// Make collection schema and export so it can be used on index.js file.
// data structures that we use to define the shape of our data
// front end to MongoDB

const mongoose = require("mongoose");

const todoTaskSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("TodoTask", todoTaskSchema);
