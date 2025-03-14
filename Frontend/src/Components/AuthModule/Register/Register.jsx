import { useState } from "react";
import styles from "./Register.module.css";
import AuthNav from "../AuthNavbar/AuthNav";
import copyright from "/copyright_light.png";
import { NavLink } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const Register = () => {
    const [formData, setFormData] = useState({
        name: "",
        address: "",
        email: "",
        number: "",
        password: "",
        confirmPass: "",
    });
    const [uid, setUid] = useState(false);
    const [generatedUid, setGeneratedUid] = useState("");

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Submit data to database
        console.log(formData);
    };

    const generateUID = () => {
        const libraryName = formData.name;
        const chars = libraryName.split("");
        const randomChars = [];
        for (let i = 0; i < 5; i++) {
            const randomIndex = Math.floor(Math.random() * chars.length);
            randomChars.push(chars[randomIndex].toUpperCase());
        }
        const uid = `LIB${randomChars.join("")}${uuidv4()
            .substring(0, 4)
            .toUpperCase()}`;
        return uid;
    };

    const onClickHandler = (event) => {
        event.preventDefault();
        const newUid = generateUID();
        setUid(true);
        setGeneratedUid(newUid);
    };

    return (
        <>
            <AuthNav />
            <div className={styles.Maincontent}>
                <div className={styles.RegisterContainer}>
                    <div className={styles.heading}>Register</div>
                    <p className={styles.ptxt}>
                        New here? Create your account now!
                    </p>

                    <form
                        action=""
                        className={styles.register}
                        onSubmit={handleSubmit}>
                        <div className={styles.formgroup}>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Library Name"
                                required
                                onChange={handleInputChange}
                            />
                            <input
                                type="text"
                                name="address"
                                id="address"
                                placeholder="Library Address"
                                required
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className={styles.formgroup}>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Library Email"
                                required
                                onChange={handleInputChange}
                            />
                            <input
                                type="text"
                                name="number"
                                id="number"
                                placeholder="Library phone Number"
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

                            <input
                                type="password"
                                name="confirmPass"
                                id="confirmPass"
                                placeholder="Confirm Password"
                                required
                                onChange={handleInputChange}
                            />
                        </div>
                        {!uid ? (
                            <button
                                type="register"
                                className={styles.button}
                                onClick={onClickHandler}>
                                Generate UID
                            </button>
                        ) : (
                            <div className={styles.generate}>
                                <div className={styles.uid}>
                                    <p className={styles.genheading}>
                                        Your UID - {generatedUid}
                                    </p>
                                    <p className={styles.genpara}>
                                        <span>*</span> This UID is mandatory for
                                        login and user end.
                                    </p>
                                </div>
                                <div className={styles.btnmain}>
                                    <button
                                        type="submit"
                                        className={styles.button}>
                                        Register
                                    </button>
                                </div>
                            </div>
                        )}
                    </form>
                    {!uid && (
                        <p className={styles.ptxt}>
                            Already have an account?{" "}
                            <NavLink to="/login">Login</NavLink>
                        </p>
                    )}
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
export default Register;
