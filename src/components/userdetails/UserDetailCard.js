import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAllUsers } from "../../lib/store/User/UserSlice";
import Button from "../../lib/shared/Button";

export default function UserDetailCard({ user }) {
    const { userId } = useParams();
    const allUser = useSelector(selectAllUsers);
    const [isPrevDisable, setIsPrevDisable] = useState(false);
    const [isNextDisable, setIsNextDisable] = useState(false);

    useEffect(() => {
        if (Number(userId) === 1) {
            setIsPrevDisable(true);
            return;
        } else if (Number(userId) === allUser.length) {
            setIsNextDisable(true);
            return;
        } else {
            setIsNextDisable(false);
            setIsPrevDisable(false);
        }
    }, [isPrevDisable, isNextDisable, Number(userId)]);
    return (
        <>
            <div className="flex justify-between items-center">
                <div className="text-3xl md:text-4xl lg:text-5xl text-[#111] py-4 md:py-5 lg:py-6">
                {user.firstName} {user.maidenName} {user.lastName}
                </div>
                <div className="py-4 md:py-5 lg:py-6 flex items-center">
                    <div>
                        <Link
                            to={`/user-details/${
                                Number(userId) > 1 ? Number(userId) - 1 : 1
                            }`}
                            className="mr-4 lg:mr-6"
                        >
                            <Button label={"Prev"} isDisable={isPrevDisable} />
                        </Link>
                    </div>
                    <div>
                        <Link
                            to={`/user-details/${
                                Number(userId) < allUser.length
                                    ? Number(userId) + 1
                                    : allUser.length
                            }`}
                        >
                            <Button label={"Next"} isDisable={isNextDisable} />
                        </Link>
                    </div>
                </div>
            </div>
            <div>
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-7 place-content-between ">
                    <div className="border border-gray-300 px-4 py-3 rounded-lg order-2 lg:order-1  lg:col-span-3">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-content-around gap-6 h-full py-4">
                            <div>
                                <h2 className="text-xl sm:text-2xl my-1">
                                    Name
                                </h2>
                                <p className="sm:text-lg">
                                    {user.firstName} {user.maidenName}{" "}
                                    {user.lastName}
                                </p>
                            </div>
                            <div>
                                <h2 className="text-xl sm:text-2xl my-1">
                                    Email Address
                                </h2>
                                <p className="sm:text-lg">{user.email}</p>
                            </div>
                            <div>
                                <h2 className="text-xl sm:text-2xl my-1">
                                    Gender
                                </h2>
                                <p className="sm:text-lg">{user.gender}</p>
                            </div>
                            <div>
                                <h2 className="text-xl sm:text-2xl my-1">
                                    Age
                                </h2>
                                <p className="sm:text-lg">{user.age}</p>
                            </div>
                            <div>
                                <h2 className="text-xl sm:text-2xl my-1">
                                    Phone Number
                                </h2>
                                <p className="sm:text-lg">{user.phone}</p>
                            </div>
                            <div>
                                <h2 className="text-xl sm:text-2xl my-1">
                                    Address
                                </h2>
                                <p className="sm:text-lg">
                                    {user.address.address}
                                </p>
                            </div>
                            <div>
                                <h2 className="text-xl sm:text-2xl my-1">
                                    Home City
                                </h2>
                                <p className="sm:text-lg">
                                    {user.address.city}
                                </p>
                            </div>
                            <div>
                                <h2 className="text-xl sm:text-2xl my-1">
                                    State
                                </h2>
                                <p className="sm:text-lg">
                                    {user.address.state}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="border border-gray-300 px-4 py-3 rounded-lg order-1 lg:order-2 lg:col-span-1 flex justify-center">
                        <img src={user.image} alt="user image" className="" />
                    </div>
                </div>
            </div>
            <div className="border border-gray-300 px-4 py-3 rounded-lg order-2 md:order-2 md:col-span-2 lg:col-span-3 my-7">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-content-between gap-6">
                    <div>
                        <h2 className="text-xl sm:text-2xl my-1">
                            Date of Birth
                        </h2>
                        <p className="sm:text-lg">{user.birthDate}</p>
                    </div>
                    <div>
                        <h2 className="text-xl sm:text-2xl my-1">
                            Blood Group
                        </h2>
                        <p className="sm:text-lg">{user.bloodGroup}</p>
                    </div>
                    <div>
                        <h2 className="text-xl sm:text-2xl my-1">Hair Color</h2>
                        <p className="sm:text-lg">{user.hair.color}</p>
                    </div>
                    <div>
                        <h2 className="text-xl sm:text-2xl my-1">Hair Type</h2>
                        <p>{user.hair.type}</p>
                    </div>
                    <div>
                        <h2 className="text-xl sm:text-2xl my-1">Eye Color</h2>
                        <p className="sm:text-lg">{user.eyeColor}</p>
                    </div>
                    <div>
                        <h2 className="text-xl sm:text-2xl my-1">
                            Height (cm)
                        </h2>
                        <p className="sm:text-lg">{user.height}</p>
                    </div>
                    <div>
                        <h2 className="text-xl sm:text-2xl my-1">
                            Weight (lbs)
                        </h2>
                        <p className="sm:text-lg">{user.weight}</p>
                    </div>
                </div>
            </div>
            <div className="border border-gray-300 px-4 py-3 rounded-lg order-2 md:order-2 md:col-span-2 lg:col-span-3 my-7">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-content-between gap-6">
                    <div>
                        <h2 className="text-xl sm:text-2xl my-1">University</h2>
                        <p className="sm:text-lg">{user.university}</p>
                    </div>
                    <div>
                        <h2 className="text-xl sm:text-2xl my-1">Company</h2>
                        <p className="sm:text-lg">{user.company.name}</p>
                    </div>
                    <div>
                        <h2 className="text-xl sm:text-2xl my-1">
                            Designation
                        </h2>
                        <p className="sm:text-lg">{user.company.title}</p>
                    </div>
                    <div>
                        <h2 className="text-xl sm:text-2xl my-1">Department</h2>
                        <p className="sm:text-lg">{user.company.department}</p>
                    </div>
                    <div>
                        <h2 className="text-xl sm:text-2xl my-1">
                            Company Address
                        </h2>
                        <p className="sm:text-lg">
                            {user.company.address.address},{" "}
                            {user.company.address.city},{" "}
                            {user.company.address.state}
                        </p>
                    </div>
                    <div>
                        <h2 className="text-xl sm:text-2xl my-1">Domain</h2>
                        <p className="sm:text-lg">{user.domain}</p>
                    </div>
                </div>
            </div>
            <div className="border border-gray-300 px-4 py-3 rounded-lg order-2 md:order-2 md:col-span-2 lg:col-span-3 my-7">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-content-between gap-6">
                    <div>
                        <h2 className="text-xl sm:text-2xl my-1">User Name</h2>
                        <p className="sm:text-lg">{user.username}</p>
                    </div>
                    <div>
                        <h2 className="text-xl sm:text-2xl my-1">Password</h2>
                        <p className="sm:text-lg">{user.password}</p>
                    </div>
                    <div>
                        <h2 className="text-xl sm:text-2xl my-1">IP</h2>
                        <p className="sm:text-lg">{user.ip}</p>
                    </div>
                    <div>
                        <h2 className="text-xl sm:text-2xl my-1">
                            Mac Address
                        </h2>
                        <p className="sm:text-lg">{user.macAddress}</p>
                    </div>
                    <div className="md:col-span-2">
                        <h2 className="text-xl sm:text-2xl my-1">User Agent</h2>
                        <p className="sm:text-lg">{user.userAgent}</p>
                    </div>
                </div>
            </div>
        </>
    );
}
