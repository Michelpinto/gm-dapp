import { configureStore } from "@reduxjs/toolkit";
import gmReducer from "./gm";

const store = configureStore({
    reducer: {
        gm: gmReducer,
    },
});

export default store;
