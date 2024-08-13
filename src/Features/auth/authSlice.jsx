import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoggedIn: false,
    user: null,
    error: null,
    loading: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        // signInStart: (state) => {
        //     state.loading = true;
        // },
        // signInSuccess: (state, action) => {
        //     state.currentUser = action.payload;
        //     state.loading = false;
        //     state.error = null;
        // },
        // signInFailure: (state, action) => {
        //     state.error = action.payload;
        //     state.loading = false;
        // },
        login: (state, action) => {
            state.isLoggedIn = true;
            state.user = action.payload;
        },
        logout(state) {
            state.isLoggedIn = false;
            state.user = null;
        },
        setUser(state, action) {
            state.user = action.payload;
        },
        storedUser: (state, action) => {
            state.user = action.payload;
        }
    },
});

export const { login, logout, signInStart, signInSuccess, signInFailure, setUser } = authSlice.actions;
export default authSlice.reducer;