import { useContext, createContext, Provider } from "react";

export const ToDoContext = createContext({
  todos: [
    {
      id: "1010",
      todoTitle: "This is first todo item",
      completed: false,
    },
  ],
  addTodo: (todoTitle) => {},
  removeTodo: (id) => {},
  updateTodo: (id, todoTitle) => {},
  toggleTodo: (id) => {},
});

export const ToDoProvider = ToDoContext.Provider;

export const useToDo = () => {
  return useContext(ToDoContext);
};
