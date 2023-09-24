import React from "react";
import { Outlet } from "react-router";
import Header from "./Header";

const Layout = ()=>{
    return(
        <>
            <Header />
            <main className="bg-[#EEF7FD]">
                <Outlet />
            </main>
        </>
    )
}

export default Layout;