import {configureStore} from "@reduxjs/toolkit"
import todoReducer from "../Features/Todos/todosSlice";


export const store = configureStore({
    reducer : todoReducer
});