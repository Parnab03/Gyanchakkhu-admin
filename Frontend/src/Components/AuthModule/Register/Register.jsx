import { useState } from 'react';
import styles from './Register.module.css';
import AuthNav from '../AuthNavbar/AuthNav';
const Register = () => {
      const [formData, setFormData] = useState({
        name: "",
        address: "",
        email: "",
        number: "",
        password: "",
        confirmPass: "",
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

    const[uid, setUid] = useState(false);

    const onClickHandler = (event) => {
        event.preventDefault();
          setUid(true); 
    };
    
    
   
  return (
    <>
      <AuthNav />
      <div className={styles.Maincontent}>
        <h1>Register Now</h1>
        <p>Welcome Back. Please Enter Your Details</p>

        <form action="" className={styles.register} onSubmit={handleSubmit}>
          <div className={styles.formgroup}>
            <input
              type="text"
              name="library name"
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
              name="Number"
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
              name="con-password"
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
              onClick={onClickHandler}
            >
              Generate UID
            </button>
          ) : (
            <div className={styles.generate}>
              <h2>Your Generated UID is: LIB-001</h2>
              <p>
                <span>*</span> This UID is mandatory for login and user end.
              </p>
              <button type="submit" className={styles.button}>
                Register
              </button>
            </div>
          )}
        </form>
        {!uid && (
          <div className={styles.warning}>
            <p>
              Already have an account? <a href="/login">Login</a>
            </p>
          </div>
        )}
      </div>
    </>
  );
};
export default Register;