const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const port = process.env.port || 3000;

const app = express();

app.use(express.json());

app.post("/todo", async (req, res) => {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "You sent the wrong inputs",
    });
    return;
  }
  await todo
    .create({
      title: createPayload.title,
      description: createPayload.description,
      completed: false,
    })
    .then(() => {
      res.json({
        msg: "Todo created :)",
      });
    });
});

app.get("/todos", async (req, res) => {
  const todos = await todo.find({});
  res.json({
    todos,
  });
});

app.put("/completed", async (req, res) => {
  const updatePayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatePayload);
  if (!parsedPayload) {
    res.status(411).json({
      msg: "You sent the wrong inputs",
    });
    return;
  }
  await todo
    .updateOne(
      {
        _id: updatePayload.id,
      },
      {
        completed: true,
      }
    )
    .then(() => {
      res.json({
        msg: "Todo marked as completed",
      });
    });
});

app.listen(port, () => {
  console.log(`Express is running on ${port}`);
});
