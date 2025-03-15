import { useState } from "react";
import styles from "./Login.module.css";
import AuthNav from "../AuthNavbar/AuthNav";
import copyright from "/copyright_light.png";
import { NavLink, useNavigate } from "react-router-dom";
import { app } from "../../../firebaseConfig";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

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
export default Login;
