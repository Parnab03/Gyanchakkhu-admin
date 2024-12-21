
import React from "react";
import Styles from "./Navbar.module.css";
import GyanchakkhuIcon from "/GyanchakkhuIcon.svg";
import LibraryProfileIcon from "/LibraryProfileIcon.svg";

const Navbar = () => (
  <div className={Styles.container}>
    <nav className={Styles.navbar}>
      <div className={Styles.logo}>
        <img src={GyanchakkhuIcon} alt="Gyanchakkhu Icon" />
      </div>
      <div className={Styles["nav-links"]}>
        <a href="/book-database" className={Styles["nav-link"]}>
          Book Database
        </a>
        <a href="/user-database" className={Styles["nav-link"]}>
          User Database
        </a>
      </div>
      <div className={Styles["user-profile"]}>
        <img src={LibraryProfileIcon} alt="Library Profile Icon" />
      </div>
    </nav>
  </div>
);

export default Navbar;






/*import React from "react";
import { useNavigate } from "react-router-dom";
import Styles from "./Navbar.module.css";
import GyanchakkhuIcon from "/GyanchakkhuIcon.svg";
import LibraryProfileIcon from "/LibraryProfileIcon.svg";

const Navbar = () => {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate("/register");
  };

  return (
    <div className={Styles.container}>
      <nav className={Styles.navbar}>
        <div className={Styles.logo}>
          <img src={GyanchakkhuIcon} alt="Gyanchakkhu Icon" />
        </div>
        <div className={Styles["nav-links"]}>
          <a href="/book-database" className={Styles["nav-link"]}>
            Book Database
          </a>
          <a href="/user-database" className={Styles["nav-link"]}>
            User Database
          </a>
        </div>
        <div className={Styles["user-profile"]}>
          <img
            src={LibraryProfileIcon}
            alt="Library Profile Icon"
            onClick={handleProfileClick}
            style={{ cursor: "pointer" }}
          />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

*/


/*import React from "react";
import { useNavigate } from "react-router-dom";
import Styles from "./Navbar.module.css";
import GyanchakkhuIcon from "/GyanchakkhuIcon.svg";
import LibraryProfileIcon from "/LibraryProfileIcon.svg";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className={Styles.container}>
      <nav className={Styles.navbar}>
        <div className={Styles.logo}>
          <img src={GyanchakkhuIcon} alt="Gyanchakkhu Icon" />
        </div>
        <div className={Styles["nav-links"]}>
          <div
            className={Styles["nav-link"]}
            onClick={() => navigate("/book-database")}
            style={{ cursor: "pointer" }}
          >
            Book Database
          </div>
          <div
            className={Styles["nav-link"]}
            onClick={() => navigate("/user-database")}
            style={{ cursor: "pointer" }}
          >
            User Database
          </div>
        </div>
        <div className={Styles["user-profile"]}>
          <img
            src={LibraryProfileIcon}
            alt="Library Profile Icon"
            onClick={() => navigate("/register")}
            style={{ cursor: "pointer" }}
          />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;*/