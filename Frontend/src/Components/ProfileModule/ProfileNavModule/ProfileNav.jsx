import Styles from "./ProfileNav.module.css"
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

const ProfileNav = () => {
  const [selectedLink, setSelectedLink] = useState("notice-board");
  const [isProfileActive, setIsProfileActive] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname;
    if (currentPath === "/profile") {
      setSelectedLink("profile");
      setIsProfileActive(true);
    } else if (currentPath === "/profile/notice") {
      setSelectedLink("notice-board");
      setIsProfileActive(false);
    }
  }, [location]);

  const handleLinkClick = (link) => {
    setSelectedLink(link);
    if (link !== "profile") {
      setIsProfileActive(false);
    }
  };
  return (
    <>
      <div className={Styles.NavContainer}>
        <div className={Styles.NavBar}>
          <NavLink
            to="/profile"
            className={`${Styles.navlink} ${
              selectedLink === "profile" && !isProfileActive
                ? Styles.selected
                : ""
            }`}
            onClick={() => handleLinkClick("profile")}
          >
            Libary profile
          </NavLink>
          <NavLink
            to="/profile/notice"
            className={`${Styles.navlink} ${
              selectedLink === "notice" && !isProfileActive
                ? Styles.selected
                : ""
            }`}
            onClick={() => handleLinkClick("notice")}
          >
            Notice Board
          </NavLink>
        </div>
      </div>
    </>
  );
};
export default ProfileNav;
