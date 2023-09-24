import { useSelector } from "react-redux";
import { selectAllUsers } from "../../lib/store/User/UserSlice";
import UserListCard from "./UserListCard";

const UserList = () => {
    const users = useSelector(selectAllUsers);
    return (
        <section className="container mx-auto">
            <h2 className="text-black">users</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 place-content-between gap-6">
                {users &&
                    users.map((user) => (
                        <UserListCard user={user} key={user.id} />
                    ))}
            </div>
        </section>
    );
};

export default UserList;
