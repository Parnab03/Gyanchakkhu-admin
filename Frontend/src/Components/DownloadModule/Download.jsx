import styles from "./Download.module.css";
import GyanchakkhuIcon from "/Gyanchakhhu_new_icon.png";
import mobileImage from "/mobileImage.png";
import DownloadLink from "react-download-link";

const Download = () => {
    return (
        <>
            <div className={styles.container}>
                <h1 className={styles.title}>Gyanchakkhu</h1>
                <p className={styles.subtitle}>Library App</p>
                <p className={styles.description}>
                    Discover, issue, and manage books with ease, right from your
                    phone! Stay updated with library notices, due dates, and the
                    latest book collections. Enjoy a seamless digital library
                    experience designed to keep your reading journey smooth and
                    organized.
                </p>

                <div className={styles.phoneContainer}>
                    <img
                        src={mobileImage}
                        alt="Phone"
                        className={styles.phoneImage}
                    />
                    <div className={styles.buttons}>
                        <img
                            src={GyanchakkhuIcon}
                            alt="GyanchakkhuIcon"
                            className={styles.icon}
                        />
                        <DownloadLink
                            label="Download App"
                            filename="Gyanchakkhu.apk"
                            exportFile={() =>
                                "https://drive.google.com/file/d/11Z6uGOXBX9c-K11asqnZ1CTI0U9f325d/view?usp=drive_link"
                            }
                            className={styles.downloadButton}
                            style={{ textDecoration: "none" }}
                        />
                    </div>
                </div>
                <div className={styles.footer}>
                    <span className={styles.white}>Your Library</span>
                    <span className={styles.blue}>, Anytime, Anywhere!</span>
                </div>
            </div>
        </>
    );
};
export default Download;
