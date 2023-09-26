import { useSelector } from "react-redux";
import { selectAllUsers, getUsersStatus } from "../../lib/store/User/UserSlice";
import UserListCard from "./UserListCard";
import Loading from "../Loading";

const UserList = () => {
    const users = useSelector(selectAllUsers);
    const status = useSelector(getUsersStatus);

    let content;

    if (status === "loading") {
        content = <Loading />;
    } else {
        content = (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 place-content-between gap-6">
                {users &&
                    users.map((user) => (
                        <UserListCard user={user} key={user.id} />
                    ))}
            </div>
        );
    }
    return (
        <section className="container mx-auto py-4 md:py-5 lg:py-6">
            {content}
        </section>
    );
};

export default UserList;
