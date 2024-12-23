import Styles from "./Navbar.module.css";
import GyanchakkhuIcon from "/GyanchakkhuIcon.svg";
import LibraryProfileIcon from "/LibraryProfileIcon.svg";

const Navbar = () => (
    <div className={Styles.mainContainer}>
        <nav className={Styles.navbar}>
            <div className={Styles.logo}>
                <img src={GyanchakkhuIcon} alt="Gyanchakkhu Icon" />
            </div>
            <div className={Styles.navContainer}>
                <div className={Styles.navlinks}>
                    <a href="/book-database" className={Styles.navlink}>
                        Book Database
                    </a>
                    <a href="/user-database" className={Styles.navlink}>
                        User Database
                    </a>
                </div>
                <div className={Styles.userprofile}>
                    <img src={LibraryProfileIcon} alt="Library Profile Icon" />
                </div>
            </div>
        </nav>
    </div>
);

export default Navbar;
