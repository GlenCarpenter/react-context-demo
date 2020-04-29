import React, { useState } from "react";

export const ToDoContext = React.createContext();

export const ToDoProvider = props => {
  const [toDos, setToDos] = useState([]);

  return (
    <ToDoContext.Provider value={[toDos, setToDos]}>
      {props.children}
    </ToDoContext.Provider>
  );
};
