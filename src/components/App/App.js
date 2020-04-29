import React from "react";
import "./App.css";
import { ToDoProvider } from "../../context/ToDoContext";
import ToDoList from "../ToDoList/ToDoList";
import AddToDo from "../AddToDo/AddToDo";

function App() {
  return (
    <div>
      <ToDoProvider>
        <div className="App">
          <h1>ToDo List with React Context</h1>
          <AddToDo />
          <ToDoList />
        </div>
      </ToDoProvider>
    </div>
  );
}

export default App;
