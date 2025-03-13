import React from "react";
import Styles from "./Footer.module.css";
import LeftImg from "/FooterLeftIcon.svg";
import RightImg from "/FooterRightIcon.svg";
import CenterImg from "/FooterCenterLogo.svg";

const Footer = () => {
    return (
        <footer className={Styles.footer}>
            <div className={Styles.footercontent}>
                {/* Left Section */}
                <div className={Styles.footerLeft}>
                    <img
                        src={LeftImg}
                        alt="Left Decoration"
                        className={Styles.footerIcons}
                    />
                </div>

                {/* Center Section */}
                <div className={Styles.footerCenter}>
                    <img
                        src={CenterImg}
                        alt="Gyanchakku Logo"
                        className={Styles.footerLogo}
                    />
                    <div className={Styles.footerText}>
                        Designed and Dev by{" "}
                        <span className={Styles.highlight}>NIRANTAR →</span>
                    </div>
                </div>

                {/* Right Section */}
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
