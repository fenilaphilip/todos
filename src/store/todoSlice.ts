import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'
import Todo from '../dataModel/todo';

const initialState: Todo[] = [{
    id: "1",
    caption: "Sample task",
    description: "",
    completed: false,
}];

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<Todo>) => {
            state.push(action.payload)
        },
    },

});

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;