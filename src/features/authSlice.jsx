// This file handles state for the user login/logout sessions

import { createSlice } from "@reduxjs/toolkit";

// define an initial state for user
const initialState = {
    isAuthenticates: false,
    user: null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        
    }
}    
)