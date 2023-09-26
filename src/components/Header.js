import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { CgClose, CgMenuRight } from "react-icons/cg";
import { NavItems } from "../lib/constants/constants";

export default function Header() {
    
    const [isOpen, setIsOpen] = useState(false);
    const [navSize, setNavSize] = useState("h-24");
    const [backgroundColor, setBackgroundColor] = useState("bg-[#41436A]");
    const [navPosition, setNavPosition] = useState("sticky");
    const [targetReached, setTargetReached] = useState(false);

    const changeOnScroll = () => {
        if (window.scrollY > 10) {
            setNavSize("h-20");
            setBackgroundColor("bg-[#111]");
            setNavPosition("fixed");
        } else {
            setNavSize("h-24");
            setBackgroundColor("bg-[#41436A]");
            setNavPosition("sticky");
        }
    };


    useEffect(() => {
        window.addEventListener("scroll", changeOnScroll);
        return () => {
            window.removeEventListener("scroll", changeOnScroll);
        };
    });

    const updateTarget = useCallback((e) => {
        if (e.matches) {
            setTargetReached(true);
        } else {
            setTargetReached(false);
        }
    }, []);

    useEffect(() => {
        const media = window.matchMedia(`(max-width: 768px)`);
        if (media.addEventListener) {
            media.addEventListener("change", updateTarget);
        } else {
            // compatibility for browser that dont have addEventListener
            media.addListener(updateTarget);
        }
        // Check on mount (callback is not called until a change occurs)
        if (media.matches) {
            setTargetReached(true);
        }
        if (media.removeEventListener) {
            return () => media.removeEventListener("change", updateTarget);
        } else {
            // compatibility for browser that dont have removeEventListener
            return () => media.removeListener(updateTarget);
        }
    });


    const iconToggler = () => {
        setIsOpen(!isOpen);
        setTargetReached(!targetReached);
    };
    return (
        <header
            className={`top-0 right-0 left-0 z-10 
                ${navSize} ${backgroundColor} ${navPosition} 
                transition-all duration-300 ease-in-out  shadow-[0_6px_48px_5px_rgba(0,0,0,0.03)] `}
        >
            <div className="container mx-auto flex justify-between items-center h-full relative">
                <nav className="flex justify-between  items-center h-full w-full">
                    <div>
                        <Link to={"/"}>
                            <p className="text-white text-2xl font-bold">
                                User Detail App
                            </p>
                        </Link>
                    </div>
                    <div
                        className={` absolute md:relative  ${
                            targetReached === true && isOpen === true
                                ? "bg-[#41436A] h-screen right-0 top-24 w-[50%] block open menu py-4"
                                : "hidden md:flex md:justify-between md:items-center"
                        }`}
                    >
                        {NavItems.map((item) => (
                            <Link to={item.link} key={item.id} className="">
                                {/* {matchPath({path:item.link}, pathname)} */}
                                <div className="">
                                    <p className="pl-10 py-4 text-white font-semibold">
                                        {item.label}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </nav>
                <div className={`${targetReached ? "visible" : "hidden"}`}>
                    <button className={` py-1`} onClick={iconToggler}>
                        <i
                            className={`text-white text-3xl ${
                                isOpen ? "hidden" : "block"
                            }`}
                        >
                            <CgMenuRight />
                        </i>
                        <i
                            className={`text-white text-3xl ${
                                isOpen ? "block" : "hidden"
                            }`}
                        >
                            <CgClose />
                        </i>
                    </button>
                </div>
            </div>
        </header>
    );
}
