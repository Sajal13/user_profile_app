import React from "react";

export default function Button({ label,isDisable }) {
    return (
        <>
            <button 
                className={`relative inline-flex items-center justify-center 
                    p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium  rounded-lg 
                     ${isDisable ? "bg-transparen text-white": "group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white text-white focus:ring-4 focus:outline-none focus:ring-cyan-800"}`}
                     disabled={isDisable}
                     >
                <span 
                    className={`relative px-6 py-4 md:px-12 md:py-4 transition-all ease-in duration-75
                    ${isDisable ? " bg-gray-200 text-black": " bg-gray-900"}  rounded-md group-hover:bg-opacity-0`}
                >
                    {label}
                </span>
            </button>
        </>
    );
}
