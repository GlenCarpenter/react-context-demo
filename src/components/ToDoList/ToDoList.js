import React, { useContext } from "react";
import { ToDoContext } from "../../context/ToDoContext";

function ToDoList() {
  const [toDos, setToDos] = useContext(ToDoContext);

  const completeToDo = index => {
    let completedToDo = [...toDos];
    completedToDo[index].complete = true;

    setToDos(completedToDo);
    // completedToDoAsync(completedToDo);
  };

  /*
  const completedToDoAsync = async completedToDo => {
    const completedToDoPromise = new Promise(function(resolve) {
      setTimeout(function() {
        resolve(completedToDo);
      }, 500);
    });

    setToDos(await completedToDoPromise);
  };
  */

  return (
    <div className="ToDoList">
      <h2>To Do List</h2>
      {toDos.map((toDo, index) => (
        <div key={toDo.id}>
          <span
            style={{ textDecoration: toDo.complete ? "line-through" : "none" }}
          >
            Task: {toDo.task}
          </span>
          {!toDo.complete && (
            <button
              onClick={() => completeToDo(index)}
              style={{ marginLeft: 25 }}
            >
              Complete
            </button>
          )}
        </div>
      ))}
    </div>
  );
}

export default ToDoList;
