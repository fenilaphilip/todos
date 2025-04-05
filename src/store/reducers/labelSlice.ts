import { createSlice } from "@reduxjs/toolkit";
import { loadLabels } from "../localStorage";
import type { PayloadAction } from '@reduxjs/toolkit'


export const labelSlice = createSlice({
    name: 'labels',
    initialState: loadLabels(),
    reducers: {
        addNewLabel: (state, action: PayloadAction<string>) => {
            state.push(action.payload);
        }
    }
});

export const { addNewLabel } = labelSlice.actions;
export default labelSlice.reducer;
