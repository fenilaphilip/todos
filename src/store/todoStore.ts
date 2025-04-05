import { combineReducers, configureStore } from '@reduxjs/toolkit';
import todoReducer from "./reducers/todoSlice"
import { storeLabels, storeTodoList } from './localStorage';
import labelReducer from "./reducers/labelSlice"

export const store = configureStore({
    reducer: combineReducers({
        todoReducer,
        labelReducer,
    }),
});

store.subscribe(() => {
    const data = store.getState();
    console.debug(`Inside subscribe state=${JSON.stringify(data)}`);
    storeTodoList(data.todoReducer);
    storeLabels(data.labelReducer);
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch