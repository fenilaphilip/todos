import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'
import Todo from '../dataModel/todo';

export const initialState: Todo[] = [];

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<Todo>) => {
            state.unshift(action.payload);
        },
        deleteTodo: (state, action) => {
            const remainingTodo = state.filter((todo) => (todo.id !== action.payload));
            return remainingTodo;
        }
    },

});

export const { addTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;