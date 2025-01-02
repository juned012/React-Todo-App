import { createContext, useState } from "react";

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todoData, setTodoData] = useState([]);

  const addToTask = (task) => {
    setTodoData([...task, todoData]);
  };
  return (
    <TodoContext.Provider value={(todoData, addToTask)}>
      {children}
    </TodoContext.Provider>
  );
};
