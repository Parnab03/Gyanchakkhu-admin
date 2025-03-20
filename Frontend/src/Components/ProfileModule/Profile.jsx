import { useState } from "react";
import { getAuth, signOut } from "firebase/auth";
import styles from "./Profile.module.css";
import { getDatabase, child, get, ref } from "firebase/database";
import qrImage from "./qrImage.png";

const Profile = () => {
    const [userData, setUserData] = useState(null);
    const auth = getAuth();
    const database = getDatabase();
    const databaseRef = ref(database);
    const libraryRef = child(databaseRef, "libraryList/");
    get(libraryRef)
        .then((snapshot) => {
            if (snapshot.exists()) {
                const libraryList = snapshot.val();
                const userEmail = auth.currentUser.email;
                Object.keys(libraryList).forEach((uid) => {
                    const libraryEmail = libraryList[uid].email;
                    if (libraryEmail === userEmail) {
                        // console.log(libraryList[uid]);
                        setUserData(libraryList[uid]);
                    }
                });
            } else {
                console.log("No data available");
            }
        })
        .catch((error) => {
            console.error(error);
        });
    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                alert("User signed out");
            })
            .catch((error) => {
                alert(error);
            });
    };

    return (
      <div className={styles.profileContainer}>
        {userData && (
          <>
            <div className={styles.profile}>
              <div className={styles.details}>
                <p>
                  <span>Library Name</span> {userData.name}
                </p>
                <p>
                  <span>Library Email</span> {userData.email}
                </p>
                <p>
                  <span>Library Ph. No.</span> {userData.number}
                </p>
                <p>
                  <span>Library Address</span> {userData.address}
                </p>
                <p>
                  <span>Library UID </span> {userData.uid}
                </p>
              </div>
              <div className={styles.qr}>
                <img src={qrImage} alt="#" />
                <p>Generate your Library Credential QR </p>
              </div>
            </div>
            <div className={styles.buttons}>
              <button className={styles.signOutBtn} onClick={handleSignOut}>
                Sign Out
              </button>
              <button className={styles.printBtn}>Print Qr</button>
            </div>
          </>
        )}
      </div>
    );
};

export default Profile;
