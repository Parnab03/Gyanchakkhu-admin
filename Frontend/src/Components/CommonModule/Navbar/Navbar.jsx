import React, { useState } from "react";
import Styles from "./Navbar.module.css";
import GyanchakkhuIcon from "/GyanchakkhuIcon.svg";
import LibraryProfileIcon from "/LibraryProfileIcon.svg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [selectedLink, setSelectedLink] = useState("book-database");

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
                                selectedLink === "book-database"
                                    ? Styles.selected
                                    : ""
                            }`}
                            onClick={() => setSelectedLink("book-database")}>
                            Book Database
                        </NavLink>
                        <NavLink
                            to="/userdatabase"
                            className={`${Styles.navlink} ${
                                selectedLink === "user-database"
                                    ? Styles.selected
                                    : ""
                            }`}
                            onClick={() => setSelectedLink("user-database")}>
                            User Database
                        </NavLink>
                    </div>
                    <div className={Styles.userprofile}>
                        <NavLink to="/profile">
                            <img
                                src={LibraryProfileIcon}
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
