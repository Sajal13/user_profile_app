import {
    createApi,
    fetchBaseQuery
} from "@reduxjs/toolkit/query/react";


export const apiSlice = createApi({
    reducerPath: "api",
    refetchOnFocus: true,
    baseQuery:fetchBaseQuery({
        baseUrl:'https://dummyjson.com/'
    }),
    tagTypes:['User'],
    endpoints: (builder)=>({
    })
})
