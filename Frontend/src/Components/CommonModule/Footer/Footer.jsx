import React from "react";
import Styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={Styles.footer}>
      <div className={Styles["footer-content"]}>
        {/* Left Section */}
        <div className={Styles["footer-left"]}>
          <img
            src="/FooterLeft&RightIcon.svg"
            alt="Left Decoration"
            className={Styles["footer-icons"]}
          />
        </div>

        {/* Center Section */}
        <div className={Styles["footer-center"]}>
          <img
            src="/FooterCenterLogo.svg"
            alt="Gyanchakku Logo"
            className={Styles["footer-logo"]}
          />
          <p className={Styles["footer-text"]}>
            Designed And Dev By <span className={Styles.highlight}>NIRANTAR</span> →
          </p>
        </div>

        {/* Right Section */}
        <div className={Styles["footer-right"]}>
          <img
            src="/FooterRightIcon.svg"
            alt="Right Decoration"
            className={Styles["footer-icons"]}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;