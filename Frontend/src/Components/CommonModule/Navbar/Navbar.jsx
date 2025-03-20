import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Styles from "./Navbar.module.css";
import GyanchakkhuIcon from "/Gyanchakhhu_new_icon.png";
import LibraryProfileIconNonActie from "/Library_profile_non_active.png";
import LibraryProfileIconActie from "/Library_profile_active.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [selectedLink, setSelectedLink] = useState("book-database");
    const [isProfileActive, setIsProfileActive] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const currentPath = location.pathname;
        if (currentPath === "/profile") {
            setSelectedLink("profile");
            setIsProfileActive(true);
        } else if (currentPath === "/bookdatabase") {
            setSelectedLink("book-database");
            setIsProfileActive(false);
        } else if (currentPath === "/userdatabase") {
            setSelectedLink("user-database");
            setIsProfileActive(false);
        }
    }, [location]);

    const handleLinkClick = (link) => {
        setSelectedLink(link);
        if (link !== "profile") {
            setIsProfileActive(false);
        }
    };

    const handleProfileClick = () => {
        setIsProfileActive(true);
        setSelectedLink("profile");
    };

    return (
        <div className={Styles.mainContainer}>
            <nav className={Styles.navbar}>
                <div className={Styles.logo}>
                    <img src={GyanchakkhuIcon} alt="Gyanchakkhu Icon" />
                </div>
                <div className={Styles.navContainer}>
                    <div className={Styles.navlinks}>
                        <NavLink
                            to="/bookdatabase"
                            className={`${Styles.navlink} ${
                                selectedLink === "book-database" &&
                                !isProfileActive
                                    ? Styles.selected
                                    : ""
                            }`}
                            onClick={() => handleLinkClick("book-database")}>
                            Book Database
                        </NavLink>
                        <NavLink
                            to="/userdatabase"
                            className={`${Styles.navlink} ${
                                selectedLink === "user-database" &&
                                !isProfileActive
                                    ? Styles.selected
                                    : ""
                            }`}
                            onClick={() => handleLinkClick("user-database")}>
                            User Database
                        </NavLink>
                        <NavLink
                            to="/profile"
                            className={`${Styles.userprofile} ${
                                isProfileActive ? Styles.userprofile : ""
                            }`}
                            onClick={handleProfileClick}>
                            <img
                                src={
                                    isProfileActive
                                        ? LibraryProfileIconActie
                                        : LibraryProfileIconNonActie
                                }
                                alt="Library Profile Icon"
                            />
                        </NavLink>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
