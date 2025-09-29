import { useState } from "react";
import styles from "./Login.module.css";
import AuthNav from "../AuthNavbar/AuthNav";
import copyright from "/copyright_light.png";
import login_app_download from "/login_app_download.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// import { app } from "../../../firebaseConfig";

const Login = () => {
    const navigate = useNavigate();
    const auth = getAuth();

    const [formData, setFormData] = useState({
        email: "",
        uid: "",
        password: "",
    });
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.email || !formData.uid || !formData.password) {
            alert("Please fill in all required fields");
            return;
        }
        signInWithEmailAndPassword(auth, formData.email, formData.password)
            .then((userCredential) => {
                console.log(userCredential.user);
                navigate("/bookdatabase");
            })
            .catch((error) => {
                alert(error);
            });
        console.log(formData);
    };

    const handleTestCredentials = () => {
        setFormData({
            email: "gyanchakkhulibrary@gmail.com",
            uid: "LIBLNIRC6B2C",
            password: "Gyan@1234",
        });
    };

    return (
        <>
            <AuthNav />
            <div className={styles.Maincontent}>
                <div className={styles.LoginContainer}>
                    <p className={styles.heading}>Login</p>
                    <p className={styles.ptxt}>
                        Welcome back. Please enter your details
                    </p>

                    <form
                        action=""
                        className={styles.login}
                        onSubmit={handleSubmit}>
                        <div className={styles.formgroup}>
                            <input
                                type="text"
                                name="email"
                                id="email"
                                placeholder="Library Email"
                                required
                                value={formData.email}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className={styles.formgroup}>
                            <input
                                type="text"
                                name="uid"
                                id="uid"
                                placeholder="Library Unique ID"
                                required
                                value={formData.uid}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className={styles.formgroup}>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Library Password"
                                required
                                value={formData.password}
                                onChange={handleInputChange}
                            />
                        </div>
                    </form>
                    <div className={styles.btnmain}>
                        <button
                            type="submit"
                            className={styles.btn}
                            onClick={handleSubmit}>
                            Login
                        </button>
                    </div>
                    <div className={styles.ptxt}>
                        <p>
                            Not registered yet?{" "}
                            <NavLink to="/register">Register</NavLink>
                        </p>
                    </div>
                    <div className={styles.test}>
                        <p>
                            <span className={styles.star}>*</span>tap{" "}
                            <span
                                className={styles.highlight}
                                onClick={handleTestCredentials}>
                                here
                            </span>{" "}
                            to apply testing purpose credentials
                        </p>
                    </div>
                </div>
            </div>

            <div className={styles.appdownload}>
                <a
                    href="https://github.com/sayan0328/Gyanchakkhu-mobile-app/releases/tag/Gyanchakkhu"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img
                        src={login_app_download}
                        alt="App Download"
                        className={styles.login_app_download}
                    />
                </a>
            </div>

            {/* <div className={styles.footerContainer}>
                <div className={styles.footer}>
                    <img
                        src={copyright}
                        alt="CopyRight"
                        className={styles.copyright}
                    />
                    2025 I Designed and Dev by&nbsp;
                    <span className={styles.highlight}>NIRANTAR →</span>
                </div>
            </div> */}
        </>
    );
};
export default Login;
