import styles from './AuthNav.module.css';
import GYANCHAKKHULogo from '/GYANCHAKKHULogo.svg';
import GyanchakkhuIcon from '/GyanchakkhuIcon.svg';
const AuthNav = () => {
    return (
      <div className={styles.navbar}>
        <img src={GyanchakkhuIcon} alt="" className={styles.icon} />
        <img src={GYANCHAKKHULogo} alt="" className={styles.logo} />
      </div>
    );

}
export default AuthNav;