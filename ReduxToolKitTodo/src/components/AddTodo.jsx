import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../Features/Todos/todosSlice";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandle = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <div className="     flex items-center justify-center bg-gray-900 px-4">
      <div className="w-full max-w-md bg-gray-800 p-6 rounded-xl shadow-lg">
        <h2 className="text-xl font-semibold text-white mb-6 text-center">
          Add New Todo
        </h2>

        <form className="flex items-center gap-3" onSubmit={addTodoHandle}>
          <input
            type="text"
            placeholder="Enter a todo..."
            required
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-gray-700 rounded-lg border border-gray-600
            focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900
            text-base text-gray-100 placeholder-gray-400
            py-2 px-4 outline-none
            transition-colors duration-200"
          />

          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700
            text-white font-medium
            px-6 py-2 rounded-lg
            transition-colors duration-200"
          >
            Add Todo
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddTodo;
