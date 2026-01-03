import { createSlice, nanoid } from "@reduxjs/toolkit";

const savedTodos = JSON.parse(localStorage.getItem("todos"))  || [];

const initialState = {
  
  todos: savedTodos || [
    {
      id: 1,
      text: "Hello World",
      completed:false
    },
  ],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
        completed:false
      };
      localStorage.setItem("todos" ,JSON.stringify(state.todos));
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
        state.todos = state.todos.filter((todo)=> todo.id !== action.payload)
        localStorage.setItem("todos" ,JSON.stringify(state.todos))
    },
    updateTodo :(state , action)=>{
        const {id , text} = action.payload;
        const todo = state.todos.find((todo)=>todo.id === id);
        if(todo){
            todo.text = text;
        }
        localStorage.setItem("todos" , JSON.stringify(state.todos))
    }
  },
});

export const {addTodo , removeTodo , updateTodo} = todoSlice.actions

export default todoSlice.reducer
