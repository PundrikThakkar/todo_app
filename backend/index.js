const express = require("express");
const { createTodo, updateTodo } = require("./types");
const port = process.env.port || 3000;

const app = express();

app.use(express.json());

app.post("/todo", (req, res) => {});

app.get("/todos", (req, res) => {});

app.put("/completed", (req, res) => {});

app.listen(port, () => {
  console.log(`Express is running on ${port}`);
});
