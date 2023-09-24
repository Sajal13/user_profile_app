import React,{ useState, useEffect} from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectAllUsers,selectUserById } from "../../lib/store/User/UserSlice";
import UserDetailCard from "./UserDetailCard";

const UserDetails = () => {
    const { userId } = useParams()
    const [userDetailId, setUserDetailId] = useState(Number(userId));
    const userById = useSelector((state) => selectUserById(state, userDetailId));

    return (
        <section className="container mx-auto">
            <h2 className="text-black">Users Details</h2>
            <UserDetailCard user={userById} />
        </section>
    );

};

export default UserDetails;
