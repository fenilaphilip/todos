import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'
import Todo from '../../dataModel/todo';
import { loadTodoList } from './../localStorage';
import dayjs from 'dayjs';

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
                        completed: action.payload.completed,
                        repeats: action.payload.repeats
                    }
                }
                return todo;
            });
            console.debug(`updatedTodos after editing ${JSON.stringify(updatedTodos)}`);
            return updatedTodos;
        },
        createRepeats: (state, action) => {
            let newTodos = [...state];
            let todo = action.payload;
            const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
            const today = dayjs();
            let dayToday = today.format("ddd");
            let dayIndex = DAYS.findIndex((day) => day === dayToday);
            let firstRepeatIndex = todo.repeats.findIndex((element: boolean) => element == true);
            let indexDiff = Math.abs(firstRepeatIndex - dayIndex);
            if (todo.dueDate === null || todo.duedate.isBefore(today, 'day')) {
                todo = {
                    ...todo,
                    dueDate: dayjs().add(indexDiff, "day")
                }
            }

            return newTodos;
        }
        ,
        clearCompleted: (state) => {
            const updatedTodos = state.filter((todo) => todo.completed === false);
            return updatedTodos;
        },
        setTodos: (state, action: PayloadAction<Todo[]>) => { //handle import
            state = action.payload;
            return state;
        },

    },

});

export const { addTodo, deleteTodo, editTodo, clearCompleted, setTodos } = todoSlice.actions;
export default todoSlice.reducer;