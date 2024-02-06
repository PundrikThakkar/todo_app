function CreateTodo() {
  const style = {
    padding: "10px",
    margin: "10px",
  };
  return (
    <div>
      <input type="text" placeholder="title" style={style} />
      <br />
      <input type="text" placeholder="description" style={style} />
      <br />
      <button style={style}>Add a todo</button>
    </div>
  );
}

export default CreateTodo;
