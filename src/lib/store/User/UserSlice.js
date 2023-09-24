import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const USERS_API_URL = 'https://dummyjson.com/users';

// Async thunk to fetch users from an API
export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const response = await axios.get(USERS_API_URL);
    return response.data;
});

const userSlice = createSlice({
    name: 'users',
    initialState: {
        users: [],
        status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.users = action.payload;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export const selectAllUsers = (state) => state.users.users.users;
export const getUsersStatus = (state) => state.users.users.status;
export const getUsersError = (state) => state.users.users.error;

// Selector to get a user by their ID
export const selectUserById = (state, userId) => {
    const users = state.users.users.users || [];
    return users.find(user => user.id === userId);
};

export default userSlice.reducer;
