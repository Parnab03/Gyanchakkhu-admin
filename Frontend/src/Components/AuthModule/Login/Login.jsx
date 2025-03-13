import { useState } from "react";
import styles from "./Login.module.css";
import AuthNav from "../AuthNavbar/AuthNav";
import { NavLink, useNavigate } from "react-router-dom";
const Login = () => {
    const [formData, setFormData] = useState({
        name: "",
        UniqueID: "",
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
    };
    const [uid, setUid] = useState(false);

    const navigate = useNavigate();

    const routeHandler = () => {
        navigate("/bookdatabase");
    };

    return (
        <>
            <AuthNav />
            <div className={styles.Maincontent}>
                <h1>Login</h1>
                <p className={styles.ptxt}>
                    Welcome Back. Please Enter Your Details
                </p>

                <form
                    action=""
                    className={styles.login}
                    onSubmit={handleSubmit}>
                    <div className={styles.formgroup}>
                        <input
                            type="text"
                            name="library name"
                            id="name"
                            placeholder="Library Name"
                            required
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className={styles.formgroup}>
                        <input
                            type="number"
                            name="number"
                            id="number"
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
                        className={styles.button}
                        onClick={routeHandler}>
                        Login
                    </button>
                </div>
                {!uid && (
                    <div className={styles.register}>
                        <p>
                            Not Registered Yet?{" "}
                            <NavLink to="/register">Register Now</NavLink>
                        </p>
                    </div>
                )}
            </div>
        </>
    );
};
export default Login;
