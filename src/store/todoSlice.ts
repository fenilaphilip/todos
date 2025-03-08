import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'
import Todo from '../dataModel/todo';
import { loadTodoList } from './localStorage';

export const todoSlice = createSlice({
    name: 'todos',
    initialState: loadTodoList(),
    reducers: {
        addTodo: (state, action: PayloadAction<Todo>) => {
            state.unshift(action.payload);
        },
        deleteTodo: (state, action) => {
            const remainingTodos = state.filter((todo) => (todo.id !== action.payload));
            return remainingTodos;
        },
        editTodo: (state, action) => {
            const updatedTodos = state.map((todo) => {
                if (todo.id == action.payload.id) {
                    return {
                        ...todo,
                        caption: action.payload.caption,
                        description: action.payload.description,
                        dueDate: action.payload.dueDate,
                        labels: action.payload.labels,
                        priority: action.payload.priority,
                        completed: action.payload.completed
                    }

                }
                return todo;
            });
            return updatedTodos;
        },
    },

});

export const { addTodo, deleteTodo, editTodo } = todoSlice.actions;
export default todoSlice.reducer;