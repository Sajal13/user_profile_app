import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
    selectUserById,
    getUsersStatus,
} from "../../lib/store/User/UserSlice";
import UserDetailCard from "./UserDetailCard";
import Loading from "../Loading";

const UserDetails = () => {
    const { userId } = useParams();
    const userDetailsStatus = useSelector(getUsersStatus);
    const userById = useSelector((state) =>
        selectUserById(state, Number(userId))
    );
    let content;
    if (userDetailsStatus == "loading") {
        content = <Loading />;
    } else if (!userById) {
        content = <p className="text-3xl text-red-500">User Not Found</p>;
    } else {
        content = <UserDetailCard user={userById} />;
    }

    return (
    <section 
        className="container mx-auto">
        {content}
    </section>);
};

export default UserDetails;
