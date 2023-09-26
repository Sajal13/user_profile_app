import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query'
import UserReducer from "./User/UserSlice";
import { apiSlice } from '../api/apislice'

export const store = configureStore({
    reducer:{
        users: UserReducer
    },
    middleware: (gDM) => gDM().concat(apiSlice.middleware),
})

setupListeners(store.dispatch)