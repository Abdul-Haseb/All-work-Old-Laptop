import { useEffect, useState } from "react";
import { TodoProvider } from "./contexts";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

// Define the type for a Todo item
interface Todo {
  id: number;
  todoMsg: string;
  completed: boolean;
}

function App() {
  // State to save all the todos
  const [allTodos, setAllTodos] = useState<Todo[]>([]);

  // Function to add a new todo to the state
  const addTodo = (todo: Omit<Todo, "id">) => {
    setAllTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  // Function to update an existing todo in the state
  const updateTodo = (id: number, updatedTodo: Partial<Todo>) => {
    setAllTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, ...updatedTodo } : todo))
    );
  };

  // Function to delete a todo from the state
  const deleteTodo = (id: number) => {
    setAllTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  // Function to toggle the completed status of a todo
  const toggleComplete = (id: number) => {
    setAllTodos((prevTodo) =>
      prevTodo.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Effect to save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(allTodos));
  }, [allTodos]);

  // Effect to load todos from localStorage when the component mounts
  useEffect(() => {
    // Retrieve todos from localStorage
    const getAllTodos = localStorage.getItem("todos");
    // If there are todos, parse them and set the state
    if (getAllTodos) {
      setAllTodos(JSON.parse(getAllTodos));
    }
  }, []);

  return (
    // Provide the todo context to the rest of the app
    <TodoProvider value={{ addTodo, updateTodo, deleteTodo, toggleComplete }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/* Loop through todos and render a TodoItem for each */}
            {allTodos.map((todo) => (
              <div className="w-full" key={todo.id}>
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
