import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'
import Todo, { Priority } from '../dataModel/todo';

export const initialState: Todo[] = [{
    id: new Date().toLocaleDateString(),
    caption: "Sample task",
    description: "happy coding",
    dueDate: new Date('2025-03-06T00:00:00.000Z'),
    completed: false,
    priority: Priority.Medium
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