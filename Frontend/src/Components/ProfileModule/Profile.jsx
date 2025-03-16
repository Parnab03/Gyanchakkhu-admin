import { get, ref } from "firebase/database";
import { useState, useEffect } from "react";
import { getAuth, signOut } from "firebase/auth";
import styles from "./Profile.module.css";

const Profile = () => {
    // const [profileData, setProfileData] = useState({});
    // const generatedUid = "your-generated-uid";

    // useEffect(() => {
    //     const libraryRef = ref(database, "libraryList/" + generatedUid);
    //     get(libraryRef)
    //         .then((snapshot) => {
    //             if (snapshot.exists()) {
    //                 setProfileData(snapshot.val());
    //             } else {
    //                 console.log("No data available");
    //             }
    //         })
    //         .catch((error) => {
    //             console.error(error);
    //         });
    // }, []);
    const auth = getAuth();
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
            <h1>Profile</h1>
            <p>Name: </p>
            <p>Address: </p>
            <p>Email: </p>
            <p>Number: </p>
            <button onClick={handleSignOut}>Log Out</button>
        </div>
    );
};

export default Profile;
