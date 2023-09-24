import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import UserList from "./components/userlist/UserList";
import UserDetails from "./components/userdetails/UserDetails";
// import UserDetails from './Components/UserDetails';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<UserList />} />

                <Route path="user-details">
                    <Route index element={<UserDetails />} />
                    <Route path=':userId' element={<UserDetails />} />
                </Route>
            </Route>
        </Routes>
    );
}

export default App;
