import { useState, useEffect } from "react";
import { getAuth, signOut } from "firebase/auth";
import { getDatabase, child, get, ref } from "firebase/database";
import qrImage from "./qrImage.png";
import styles from "./Profile.module.css";

const Profile = () => {
    const [userData, setUserData] = useState(null);
    const auth = getAuth();
    const database = getDatabase();
    const databaseRef = ref(database);
    const libraryRef = child(databaseRef, "libraryList/");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const snapshot = await get(libraryRef);
                if (snapshot.exists()) {
                    const libraryList = snapshot.val();
                    const userEmail = auth.currentUser.email;
                    Object.keys(libraryList).forEach((uid) => {
                        const libraryEmail = libraryList[uid].email;
                        if (libraryEmail === userEmail) {
                            setUserData(libraryList[uid]);
                            console.log(libraryList[uid]);
                        }
                    });
                } else {
                    console.log("No data available");
                }
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

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
                            <button
                                className={styles.signOutBtn}
                                onClick={handleSignOut}>
                                Signout
                            </button>
                        </div>
                        {/* <div className={styles.details}>
                            <div className={styles.column1}>
                                <p>Library Name</p>
                                <p>Library Email</p>
                                <p>Library Ph. No.</p>
                                <p>Library Address</p>
                                <p>Library UID</p>
                            </div>
                            <div className={styles.column2}>
                                <p>{userData.name}</p>
                                <p>{userData.email}</p>
                                <p>{userData.number}</p>
                                <p>{userData.address}</p>
                                <p>{userData.uid}</p>
                            </div>
                        </div> */}
                        <div className={styles.qrContainer}>
                            <div className={styles.qr}>
                                <img src={qrImage} alt="qrImage" />
                                <p>Generate your Library Credential QR </p>
                            </div>
                            <button className={styles.printBtn}>
                                Print QR
                            </button>
                        </div>
                    </div>
                    {/* <div className={styles.buttons}>
                        <button
                            className={styles.signOutBtn}
                            onClick={handleSignOut}>
                            Signout
                        </button>
                    </div> */}
                </>
            )}
        </div>
    );
};

export default Profile;
