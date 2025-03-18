import { useState } from "react";
import { getAuth, signOut } from "firebase/auth";
import styles from "./Profile.module.css";
import { getDatabase, child, get, ref } from "firebase/database";

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
                <div>
                    <h1>Profile</h1>
                    <p>Name: {userData.name}</p>
                    <p>Address: {userData.address}</p>
                    <p>Email: {userData.email}</p>
                    <p>Number: {userData.number}</p>
                    <p>UID: {userData.uid}</p>
                    <button onClick={handleSignOut}>Log Out</button>
                </div>
            )}
        </div>
    );
};

export default Profile;
