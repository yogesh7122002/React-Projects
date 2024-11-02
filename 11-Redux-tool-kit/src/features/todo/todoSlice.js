import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{
        id: 1,
        text: "Hello World"
    }]
};

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: { // Use 'reducers' here
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload.text
            };
            state.todos.push(todo);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(item => item.id !== action.payload);
        },
        updateTodo: (state, action) => {
            const { id, text } = action.payload;
            const existingTodo = state.todos.find(item => item.id === id);
            if (existingTodo) {
                existingTodo.text = text;
            }
        }
    }
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer; // Export the reducer here
