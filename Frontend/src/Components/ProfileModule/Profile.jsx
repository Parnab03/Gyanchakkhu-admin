import { useState, useEffect } from "react";
import { getAuth, signOut } from "firebase/auth";
import { getDatabase, child, get, ref } from "firebase/database";
import QRCode from "react-qr-code";
import jsPDF from "jspdf";
import domtoimage from "dom-to-image";
import qrImage from "./qrImage.png";
import styles from "./Profile.module.css";

const Profile = () => {
    const [userData, setUserData] = useState(null);
    const [showQR, setShowQR] = useState(false);
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

    const handleGenerateQR = () => {
        setShowQR(true);
    };

    const handlePrintQR = async () => {
        // console.log("testing");
        const qrCode = document.getElementById("qr-code");

        const doc = new jsPDF("p", "mm", "a4");
        const libraryName = userData.name;
        const libraryUid = userData.uid;

        doc.text(`Library Name: ${libraryName}`, 10, 10);
        doc.text(`Library UID: ${libraryUid}`, 10, 20);

        const qrCodeImage = await domtoimage.toPng(qrCode, {
            width: 100,
            height: 100,
            style: {
                border: "none",
                boxShadow: "none",
            },
        });
        // console.log(qrCodeImage);

        doc.addImage(qrCodeImage, "PNG", 55, 50, 100, 100);
        doc.text(
            "Scan this to add the library to your mobile app.",
            105,
            170,
            null,
            null,
            "center"
        );
        const fileName = `${libraryName}@GyanQR.pdf`;
        doc.save(fileName);
    };

    return (
        <div className={styles.profileContainer}>
            {userData && (
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
                    <div className={styles.qrContainer}>
                        {showQR ? (
                            <div className={styles.qr}>
                                <QRCode
                                    value={`${userData.name},${userData.uid}`}
                                    fgColor="#4E4E4E"
                                    // level="Q"
                                    size={280}
                                    id="qr-code"
                                    className="qr-code"
                                />
                            </div>
                        ) : (
                            <div className={styles.qr}>
                                <img src={qrImage} alt="qrImage" />
                                <p
                                    className={styles.generateQR}
                                    onClick={handleGenerateQR}>
                                    Generate your Library Credential QR
                                </p>
                            </div>
                        )}
                        <button
                            className={styles.printBtn}
                            onClick={handlePrintQR}>
                            Print QR
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Profile;
