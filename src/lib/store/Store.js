import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./User/UserSlice"

export const store = configureStore({
    reducer:{
        users: UserReducer
    }
})