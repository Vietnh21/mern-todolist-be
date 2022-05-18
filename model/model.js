const mongoose = require("mongoose");

const todolistSchema = new mongoose.Schema({
  title: {
    type: String,
  },
});

let Todolist = mongoose.model("todolist", todolistSchema);

module.exports = { Todolist };
