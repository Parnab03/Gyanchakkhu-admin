import styles from "./AuthNav.module.css";
import Icon from "/Gyanchakhhu_new_icon.png";
import Text from "/Gyanchakkhu_admin_text.png";
const AuthNav = () => {
    return (
        <nav className={styles.Authnav}>
            <div className={styles.navbar}>
                <img src={Icon} alt="Icon" className={styles.icon} />
                <img src={Text} alt="Logo" className={styles.text} />
            </div>
        </nav>
    );
};
export default AuthNav;
