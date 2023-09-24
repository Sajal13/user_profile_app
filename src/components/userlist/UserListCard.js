import React from "react";

export default function UserListCard({ user }) {
    return (
        <>
            <div className="bg-gray-800 w-full border border-gray-700 shadow">
                <div className="flex flex-col items-center py-8 px-4">
                    <img
                        className="w-24 h-24 mb-4 rounded-full shadow-lg bg-white"
                        src={user.image}
                        alt="user image"
                    />
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                        {user.firstName} {user.lastName}
                    </h5>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                        {user.email}
                    </span>
                    <div className="mt-4 md:mt-6">
                        <a
                            href="#"
                            className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
                        >
                            View Details
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
