const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://Pundrik_Shayta:abcdefgh@cluster1.macrrqs.mongodb.net/todos"
);

const todoSchema = new mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model("todos", todoSchema);

module.exports = {
  todo,
};
