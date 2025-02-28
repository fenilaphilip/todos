import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'
import Todo from '../dataModel/todo';

export const initialState: Todo[] = [];

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<Todo>) => {
            console.log(`Adding todo ${JSON.stringify(action.payload)}`)
            state.push(action.payload)
        },
        deleteTodo: (state, action) => {
            console.debug(`delete got clicked`)
            console.log(state, action.payload);
        }
    },

});

export const { addTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;