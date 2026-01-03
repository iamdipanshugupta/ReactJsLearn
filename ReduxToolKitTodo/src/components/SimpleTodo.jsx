import React, { useState } from "react";
import { removeTodo, updateTodo } from "../Features/Todos/todosSlice";
import { useSelector, useDispatch } from "react-redux";

function SimpleTodo() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  const handleUpdate = (id) => {
    dispatch(updateTodo({ id, text: editText }));
    setEditId(null);
    setEditText("");
  };

  return (
    <>
      <h2 className="text-xl font-semibold mb-4 text-white">My Todos</h2>

      <ul className="max-w-md space-y-3">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center justify-between bg-gray-800 px-4 py-2 rounded-lg"
          >
            {editId === todo.id ? (
              <input
                className="flex-1 mr-3 bg-gray-700 text-white px-2 py-1 rounded outline-none"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />
            ) : (
              <span className="text-gray-100">{todo.text}</span>
            )}

            <div className="flex gap-2">
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                title="Delete"
              >
                🗑️
              </button>

              {editId === todo.id ? (
                <button
                  onClick={() => handleUpdate(todo.id)}
                  className="px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600"
                  title="Save"
                >
                  ✅
                </button>
              ) : (
                <button
                  onClick={() => {
                    setEditId(todo.id);
                    setEditText(todo.text);
                  }}
                  className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                  title="Edit"
                >
                  ✏️
                </button>
              )}    
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default SimpleTodo;
