import React, { useState, useContext } from "react";
import { ToDoContext } from "../../context/ToDoContext";

function AddToDo() {
  const [toDos, setToDos] = useContext(ToDoContext);
  const [value, setValue] = useState("");

  const addToDo = (e, value, id) => {
    e.preventDefault();
    if (value === "") return;
    else setValue("");

    const newToDo = {
      task: value,
      complete: false,
      id: id
    };

    setToDos(prevState => [...prevState, newToDo]);
  };

  return (
    <div className="AddToDo">
      <h2>Add To Do</h2>
      <form onSubmit={e => addToDo(e, value, toDos.length)}>
        <input
          type="text"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <button style={{ marginLeft: 25 }} disabled={value === ""}>
          Add Task
        </button>
      </form>
    </div>
  );
}

export default AddToDo;
