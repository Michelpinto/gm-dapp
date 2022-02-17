import { createSlice } from "@reduxjs/toolkit";

export const gmSlice = createSlice({
    name: "gm",

    initialState: {
        gmContract: "0xf87774de0848070A2298c5c6020f4A5863c95f57",
    },

    reducers: {
        setGmContract: (state, action) => {
            state.gmContract = action.payload;
        },
    },
});

export const { setGmContract } = gmSlice.actions;

export default gmSlice.reducer;
