import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: 'search',
    initialState: {},
    reducers: {
        storeSuggestions: (state, action) => {
            state = Object.assign(state ,action.payload);
        }
    }
})

export const {storeSuggestions} = searchSlice.actions;

export default searchSlice.reducer;