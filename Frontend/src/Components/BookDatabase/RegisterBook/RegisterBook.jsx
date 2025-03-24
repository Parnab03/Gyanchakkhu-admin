import Styles from "./RegisterBook.module.css";
import QrCode from "/QrCode.svg";
import Back from "/Back.svg";
import { useNavigate } from "react-router-dom";
import { app } from "../../../firebaseConfig";
import { getDatabase, ref, set, get, push } from "firebase/database";
import QRCode from "react-qr-code";
import { useState } from "react";
import qrImage from "/qrImage.png";
import jsPDF from "jspdf";
import domtoimage from "dom-to-image";
import { getAuth } from "firebase/auth";

const RegisterBook = () => {
    const navigate = useNavigate();
    const database = getDatabase();
    const auth = getAuth();
    const [showQR, setShowQR] = useState(false);

    const routeHandler = () => {
        navigate("/bookdatabase");
    };

    const handleGenerateQR = async () => {
        const inputFields = [
            formData.bookId,
            formData.bookName,
            formData.author,
            formData.publisher,
            formData.publicationYear,
            formData.genre,
            formData.language,
            formData.isbnNo,
            formData.edition,
            formData.pageCount,
            formData.rackNo,
            formData.librarySection,
            formData.description,
        ];

        if (inputFields.every((field) => field !== "")) {
            const userEmail = auth.currentUser.email;
            const libraryRef = ref(database, "libraryList");
            const librarySnapshot = await get(libraryRef);
            const libraryList = librarySnapshot.val();
            const libraryUid = Object.keys(libraryList).find(
                (uid) => libraryList[uid].email === userEmail
            );

            if (libraryUid) {
                const bookRef = ref(
                    database,
                    `libraryList/${libraryUid}/bookList/${formData.bookId}`
                );
                const bookSnapshot = await get(bookRef);
                if (bookSnapshot.exists()) {
                    alert(
                        "Book credentials already exist in database. QR code will not be generated."
                    );
                    return;
                } else {
                    setShowQR(true);
                }
            }
        } else {
            alert("Please fill in all fields to generate QR code.");
        }
    };

    const handlePrintQR = async () => {
        const doc = new jsPDF("p", "mm", "a4");
        const qrCode = document.getElementById("qr-code");
        const qrCodeImage = await domtoimage.toPng(qrCode, {
            width: 50,
            height: 50,
            style: {
                border: "none",
                boxShadow: "none",
                backgroundColor: "transparent",
            },
            format: "png",
        });

        doc.text(`Book Name: ${formData.bookName}`, 10, 10);
        doc.text(`Author Name: ${formData.author}`, 10, 20);
        doc.text(`Book ID: ${formData.bookId}`, 10, 30);

        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 3; j++) {
                doc.addImage(
                    qrCodeImage,
                    "PNG",
                    20 + j * 60,
                    50 + i * 60,
                    50,
                    50
                );
            }
        }

        const fileName = `${formData.bookName}-qr.pdf`;
        doc.save(fileName);
    };

    const [formData, setFormData] = useState({
        bookId: "",
        description: "",
        librarySection: "",
        bookName: "",
        rackNo: "",
        author: "",
        publisher: "",
        publicationYear: "",
        genre: "",
        language: "",
        isbnNo: "",
        edition: "",
        pageCount: "",
        coverImage: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === "coverImage") {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.onload = (event) => {
                const base64Image = event.target.result;
                if (base64Image) {
                    setFormData({
                        ...formData,
                        [name]: base64Image,
                    });
                    handleOnSubmit(e);
                } else {
                    setFormData({
                        ...formData,
                        [name]: null,
                    });
                }
            };
            reader.readAsDataURL(file);
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        const inputFields = [
            formData.bookId,
            formData.bookName,
            formData.author,
            formData.publisher,
            formData.publicationYear,
            formData.genre,
            formData.language,
            formData.isbnNo,
            formData.edition,
            formData.pageCount,
            formData.rackNo,
            formData.librarySection,
            formData.description,
        ];

        if (inputFields.every((field) => field !== "")) {
            if (
                formData.coverImage &&
                formData.coverImage !== null &&
                formData.coverImage !== undefined
            ) {
                const userEmail = auth.currentUser.email;
                const libraryRef = ref(database, "libraryList");
                const librarySnapshot = await get(libraryRef);
                const libraryList = librarySnapshot.val();
                const libraryUid = Object.keys(libraryList).find(
                    (uid) => libraryList[uid].email === userEmail
                );

                if (libraryUid) {
                    const bookRef = ref(
                        database,
                        `libraryList/${libraryUid}/bookList/${formData.bookId}`
                    );
                    const bookSnapshot = await get(bookRef);
                    if (bookSnapshot.exists()) {
                        alert("Book ID already exists!");
                        return;
                    } else {
                        const bookData = {
                            bookId: formData.bookId,
                            bookName: formData.bookName,
                            author: formData.author,
                            publisher: formData.publisher,
                            publicationYear: formData.publicationYear,
                            genre: formData.genre,
                            language: formData.language,
                            isbnNo: formData.isbnNo,
                            edition: formData.edition,
                            pageCount: formData.pageCount,
                            rackNo: formData.rackNo,
                            librarySection: formData.librarySection,
                            description: formData.description,
                            coverImage: await getBase64Image(
                                formData.coverImage
                            ),
                        };

                        set(bookRef, bookData)
                            .then(() => {
                                alert("Book data saved successfully!");
                            })
                            .catch((error) => {
                                alert("Error saving book data:", error);
                            });
                    }
                } else {
                    console.error("Library not found. Please try again.");
                }
            } else {
                alert("Please select a cover image.");
            }
        } else {
            alert("Please fill in all fields before submitting.");
        }
    };

    const getBase64Image = async (image) => {
        if (image instanceof File) {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onload = (event) => {
                    const base64Image = event.target.result;
                    resolve(base64Image);
                };
                reader.onerror = (error) => {
                    reject(error);
                };
                reader.readAsDataURL(image);
            });
        } else {
            return image;
        }
    };

    return (
        <>
            <div className={Styles.Regmain}>
                <div className={Styles.nav}>
                    <div className={Styles.Regcont}>
                        <button
                            className={Styles.backbtn}
                            onClick={routeHandler}>
                            <img src={Back} alt="" className={Styles.back} />{" "}
                            Back
                        </button>

                        <button className={Styles.registerbtn}>
                            <img src={QrCode} alt="" className="Qrcode" />
                            Registering New Book
                        </button>

                        <button className={`${Styles.backbtn} ${Styles.nobtn}`}>
                            <img src={Back} alt="" className={Styles.back} />{" "}
                            Back
                        </button>
                    </div>
                </div>
                <div className={Styles.secondpart}>
                    <div className={Styles.Main}>
                        <div className={Styles.mainform}>
                            <form action="" className={Styles.form}>
                                <div className={Styles.details1}>
                                    <div className={Styles.formGroup}>
                                        <label htmlFor="bookName">
                                            Book Name
                                        </label>
                                        <input
                                            type="text"
                                            name="bookName"
                                            id="bookName"
                                            placeholder="Enter Book Name"
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className={Styles.formGroup}>
                                        <label htmlFor="bookId">Book ID</label>
                                        <input
                                            type="text"
                                            name="bookId"
                                            id="bookId"
                                            placeholder="Enter Book ID"
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>
                                <div className={Styles.details1}>
                                    <div className={Styles.formGroup}>
                                        <label htmlFor="author">Author</label>
                                        <input
                                            type="text"
                                            name="author"
                                            id="author"
                                            placeholder="Enter Book Author Name"
                                            onChange={handleInputChange}
                                        />
                                    </div>

                                    <div className={Styles.formGroup}>
                                        <label htmlFor="publisher">
                                            Publisher
                                        </label>
                                        <input
                                            type="text"
                                            name="publisher"
                                            id="publisher"
                                            placeholder="Enter Publisher"
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>
                                <div className={Styles.details1}>
                                    <div className={Styles.formGroup}>
                                        <label htmlFor="publicationYear">
                                            Pub. Year
                                        </label>
                                        <input
                                            type="text"
                                            name="publicationYear"
                                            id="publicationYear"
                                            placeholder="Enter Pub Year"
                                            onChange={handleInputChange}
                                        />
                                    </div>

                                    <div className={Styles.formGroup}>
                                        <label htmlFor="genre">Genre</label>
                                        <input
                                            type="text"
                                            name="genre"
                                            id="genre"
                                            placeholder="Enter Genre"
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>
                                <div className={Styles.details1}>
                                    <div className={Styles.formGroup}>
                                        <label htmlFor="language">
                                            Language
                                        </label>
                                        <input
                                            type="text"
                                            name="language"
                                            id="language"
                                            placeholder="Enter Book Language"
                                            onChange={handleInputChange}
                                        />
                                    </div>

                                    <div className={Styles.formGroup}>
                                        <label htmlFor="isbnNo">ISBN No.</label>
                                        <input
                                            type="text"
                                            name="isbnNo"
                                            id="isbnNo"
                                            placeholder="Enter ISBN No."
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>
                                <div className={Styles.details1}>
                                    <div className={Styles.formGroup}>
                                        <label htmlFor="edition">Edition</label>
                                        <input
                                            type="text"
                                            name="edition"
                                            id="edition"
                                            placeholder="Enter Book Edition"
                                            onChange={handleInputChange}
                                        />
                                    </div>

                                    <div className={Styles.formGroup}>
                                        <label htmlFor="pageCount">
                                            Page Count
                                        </label>
                                        <input
                                            type="text"
                                            name="pageCount"
                                            id="pageCount"
                                            placeholder="Enter Page Count"
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>
                                <div className={Styles.details1}>
                                    <div className={Styles.formGroup}>
                                        <label htmlFor="rackNo">Rack No.</label>
                                        <input
                                            type="text"
                                            name="rackNo"
                                            id="rackNo"
                                            placeholder="Enter Rack No."
                                            onChange={handleInputChange}
                                        />
                                    </div>

                                    <div className={Styles.formGroup}>
                                        <label htmlFor="librarySection">
                                            Library Section
                                        </label>
                                        <input
                                            type="text"
                                            name="librarySection"
                                            id="librarySection"
                                            placeholder="Enter Library Section"
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>
                                <div
                                    className={`${Styles.details1} ${Styles.ipfile}`}>
                                    <div className={Styles.formGroup2}>
                                        <label htmlFor="coverImage">
                                            Cover image
                                        </label>
                                        <input
                                            type="file"
                                            name="coverImage"
                                            id="coverImage"
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>
                                <div
                                    className={`${Styles.formGroup1} ${Styles.desc}`}>
                                    <label htmlFor="description">
                                        Description
                                    </label>
                                    <input
                                        name="description"
                                        id="description"
                                        placeholder="Enter Description"
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </form>
                            <div className={Styles.QrMain}>
                                <div className={Styles.QrContainer}>
                                    {showQR ? (
                                        <div className={Styles.qr}>
                                            <QRCode
                                                value={`${formData.bookName},${formData.author},${formData.publisher},${formData.publicationYear},${formData.genre},${formData.edition},`}
                                                fgColor="#4E4E4E"
                                                bgColor="#fff"
                                                // level="L"
                                                size={300}
                                                id="qr-code"
                                            />
                                        </div>
                                    ) : (
                                        <div className={Styles.qr}>
                                            <img src={qrImage} alt="qrImage" />
                                            <p
                                                className={Styles.generateQR}
                                                onClick={handleGenerateQR}>
                                                Generate QR Code
                                            </p>
                                        </div>
                                    )}
                                </div>
                                <div className={Styles.buttons}>
                                    <button
                                        className={Styles.btn2}
                                        onClick={handlePrintQR}>
                                        Print QR
                                    </button>
                                    <button
                                        onClick={handleOnSubmit}
                                        type="submit"
                                        className={Styles.btn1}>
                                        Register New Book
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default RegisterBook;
