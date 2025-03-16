import AuthNav from "../AuthModule/AuthNavbar/AuthNav";
import styles from "./Error.module.css";
import copyright from "/copyright_light.png";
import Error404 from "/Error.png";
import { useNavigate } from "react-router-dom";

const Error = () => {
    const navigate = useNavigate();

    const routeHandler = () => {
        navigate("/login");
    };

    return (
        <>
            <AuthNav />
            <div className={styles.errorContainer}>
                <div className={styles.errorContent}>
                    <img src={Error404} alt="Error" className={styles.error} />
                    <button className={styles.btn} onClick={routeHandler}>
                        Back to Home
                    </button>
                </div>
                <div className={styles.footer}>
                    <img
                        src={copyright}
                        alt="CopyRight"
                        className={styles.copyright}
                    />
                    2025 I Designed and Dev by&nbsp;
                    <span className={styles.highlight}>NIRANTAR →</span>
                </div>
            </div>
        </>
    );
};
export default Error;
