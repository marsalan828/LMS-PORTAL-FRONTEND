// This file handles state for the user login/logout sessions

import { createSlice } from "@reduxjs/toolkit";

// define an initial state for user
const initialState = {
    isAuthenticated: false,
    user: null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.isAuthenticated = true;
            state.user = action.payload; // for saving the userdata
            localStorage.setItem('user', JSON.stringify(action.payload)); // to save for later use in browser
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.user = null;
            localStorage.removeItem('user');
        },
        // to get the user data from browser's local storage
        loadUser: (state) => {
            const user = JSON.parse(localStorage.getItem('user'));
            if (user) {
                state.isAuthenticated = true;
                state.user = user;
            }
        }
    }
}    
)

export const { login, logout, loadUser } = authSlice.actions;
export default authSlice.reducer;