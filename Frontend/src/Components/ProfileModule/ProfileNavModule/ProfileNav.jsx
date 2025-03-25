import Styles from "./ProfileNav.module.css";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

const ProfileNav = () => {
    const [selectedLink, setSelectedLink] = useState("profile");
    const location = useLocation();

    useEffect(() => {
        const currentPath = location.pathname;
        if (currentPath === "/profile") {
            setSelectedLink("profile");
        } else if (currentPath === "/profile/notice") {
            setSelectedLink("notice-board");
        }
    }, [location]);

    return (
        <div className={Styles.NavContainer}>
            <div className={Styles.NavBar}>
                <NavLink
                    to="/profile"
                    className={`${Styles.navlink} ${
                        selectedLink === "profile" ? Styles.selected : ""
                    }`}>
                    Library Profile
                </NavLink>
                <NavLink
                    to="/profile/notice"
                    className={`${Styles.navlink} ${
                        selectedLink === "notice-board" ? Styles.selected : ""
                    }`}>
                    Notice Board
                </NavLink>
            </div>
        </div>
    );
};

export default ProfileNav;
