import { createSlice } from "@reduxjs/toolkit";
import { loadLabels } from "../localStorage";
import type { PayloadAction } from '@reduxjs/toolkit'


export const labelSlice = createSlice({
    name: 'labels',
    initialState: loadLabels(),
    reducers: {
        addNewLabel: (state, action: PayloadAction<string>) => {
            state.push(action.payload);
        },
        removeLabel: (state, action: PayloadAction<string>) => {
            const updatedLabelArray = state.filter((label: string) => label !== action.payload);
            return updatedLabelArray;
        },
        editLabel: (state, action: PayloadAction<{
            oldLabel: string;
            newLabel: string;
        }>) => {
            const { oldLabel, newLabel } = action.payload;
            const index = state.findIndex((label) => label === oldLabel);
            state[index] = newLabel;
            return state;
        }
    }
});

export const { addNewLabel, removeLabel, editLabel } = labelSlice.actions;
export default labelSlice.reducer;
