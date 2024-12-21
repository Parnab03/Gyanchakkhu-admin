import styles from "./AuthNav.module.css";
import GYANCHAKKHULogo from "/GYANCHAKKHULogo.svg";
import GyanchakkhuIcon from "/GyanchakkhuIcon.svg";
const AuthNav = () => {
    return (
        <nav className={styles.Authnav}>
            <div className={styles.navbar}>
                <img
                    src={GyanchakkhuIcon}
                    alt="GyanchakkhuIcon"
                    className={styles.icon}
                />
                <img
                    src={GYANCHAKKHULogo}
                    alt="GYANCHAKKHULogo"
                    className={styles.logo}
                />
            </div>
        </nav>
    );
};
export default AuthNav;
