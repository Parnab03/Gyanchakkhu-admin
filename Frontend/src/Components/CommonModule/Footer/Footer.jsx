import React from "react";
import Styles from "./Footer.module.css";
import LeftImg from "/Gyanchakkhu_footer_left.png";
import RightImg from "/FooterRightIcon.svg";
import CenterImg from "/Gyanchakkhu_footer.png";
import copyright from "/copyright_light.png";

const Footer = () => {
    return (
        <footer className={Styles.footer}>
            <div className={Styles.footercontent}>
                <div className={Styles.footerLeft}>
                    <img
                        src={LeftImg}
                        alt="Left Decoration"
                        className={Styles.footerIcons}
                    />
                </div>

                <div className={Styles.footerCenter}>
                    <img
                        src={CenterImg}
                        alt="Gyanchakku Logo"
                        className={Styles.footerLogo}
                    />
                    <div className={Styles.footerText}>
                        <img src={copyright} alt="CopyRight" />
                        2025 I Designed and Dev by&nbsp;
                        <span className={Styles.highlight}>NIRANTAR →</span>
                    </div>
                </div>

                <div className={Styles.footerRight}>
                    <img
                        src={RightImg}
                        alt="Right Decoration"
                        className={Styles.footerIcons}
                    />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
