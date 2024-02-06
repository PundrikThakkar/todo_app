/* eslint-disable no-unused-vars */
import { useState } from "react";
function CreateTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const style = {
    padding: "10px",
    margin: "10px",
  };

  function handleTodo() {
    fetch("http://localhost:3000/todo", {
      method: "POST",
      body: {
        title: title,
        description,
        completed: false,
      },
    }).then(async (response) => {
      const json = await response.json();
      alert("Todo added");
    });
  }

  return (
    <div>
      <input
        type="text"
        placeholder="title"
        style={style}
        id="title"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <br />
      <input
        type="text"
        placeholder="description"
        style={style}
        id="description"
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <br />
      <button style={style} onClick={handleTodo}>
        Add a todo
      </button>
    </div>
  );
}

export default CreateTodo;
