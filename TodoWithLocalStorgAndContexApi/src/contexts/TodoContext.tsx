import { createContext, useContext } from "react";

interface Todo {
  id: number;
  todoMsg: string;
  completed: boolean;
}

interface TodoContextType {
  todoObjectsArray?: Todo[];
  addTodo: (todo: Todo) => void;
  deleteTodo: (id: number) => void;
  updateTodo: (id: number, todo: Todo) => void;
  toggleComplete: (id: number) => void;
}

// Create the context with default values
const defaultValue: TodoContextType = {
  todoObjectsArray: [{ id: 1, todoMsg: "Hello World", completed: true }],
  addTodo: () => {},
  deleteTodo: () => {},
  updateTodo: () => {},
  toggleComplete: () => {},
};

export const TodoContext = createContext<TodoContextType>(defaultValue);

export const UseTodoContext = () => useContext(TodoContext);

export const TodoProvider = TodoContext.Provider;
