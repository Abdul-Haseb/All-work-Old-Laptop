import { FormEvent, useState } from "react";
import { UseTodoContext } from "../contexts";

function TodoForm() {
  // state to save the individual todo
  const [inputValue, setInputValue] = useState("");

  const { addTodo } = UseTodoContext();

  const getInputValue = (e: FormEvent) => {
    e.preventDefault();

    if (!inputValue) return;

    addTodo({ id: Date.now(), todoMsg: inputValue, completed: false });
    setInputValue("");
    console.log(inputValue);
  };

  return (
    <form className="flex" onSubmit={getInputValue}>
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
