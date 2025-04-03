import { configureStore } from '@reduxjs/toolkit';
import todoReducer from "./todoSlice"
import { storeTodoList } from './localStorage';

export const store = configureStore({
    reducer: todoReducer,
});

store.subscribe(() => {
    const data = store.getState();
    console.debug(`Inside subscribe state=${JSON.stringify(data)}`);
    storeTodoList(data);
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch