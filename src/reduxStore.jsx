import { configureStore } from "@reduxjs/toolkit";
// after auth slice
import authReducer from "./features/authSlice";


export const reduxStore = configureStore({
    reducer: {
        auth: authReducer
    }
})