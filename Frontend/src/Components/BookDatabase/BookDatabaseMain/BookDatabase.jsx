import { GoSearch } from "react-icons/go";
import Styles from "./BookDatabase.module.css";
import { useState, useEffect } from "react";
import { getDatabase, ref, child, get } from "firebase/database";
import { useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import qrImage from "/QrCode.svg";
import QRCode from "react-qr-code";
import domtoimage from "dom-to-image";
import jsPDF from "jspdf";

const BookDatabase = () => {
    const navigate = useNavigate();
    const database = getDatabase();
    const auth = getAuth();

    const [libraryBooks, setLibraryBooks] = useState([]);
    const [search, setSearch] = useState("");
    const [filteredBooks, setFilteredBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showQR, setShowQR] = useState(false);
    const [qrVisibility, setQrVisibility] = useState({});

    const routeHandler = () => {
        navigate("/bookdatabase/registerbook");
    };

    const databaseRef = ref(database);
    const libraryRef = child(databaseRef, "libraryList/");

    const handleGenerateQR = (bookId, book) => {
        setQrVisibility((prevQrVisibility) => ({
            ...prevQrVisibility,
            [bookId]: true,
        }));
        setShowQR(true);
        setTimeout(() => {
            if (
                confirm(
                    `QR code for book ID ${bookId} is ready to print. Confirm to print.`
                )
            ) {
                handleHideQR(bookId);
                handlePrintQR(book);
            } else {
                setTimeout(() => {
                    handleHideQR(bookId);
                    alert(`QR code for book ID ${bookId} will be hidden now.`);
                }, 5000);
            }
        }, 5000);
    };

    const handleHideQR = (bookId) => {
        setQrVisibility((prevQrVisibility) => ({
            ...prevQrVisibility,
            [bookId]: false,
        }));
        setShowQR(false);
    };

    const handlePrintQR = async (book) => {
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

        doc.text(`Book Name: ${book.bookName}`, 10, 10);
        doc.text(`Author Name: ${book.author}`, 10, 20);
        doc.text(`Book ID: ${book.bookId}`, 10, 30);

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

        const fileName = `${book.bookName}@GyanQR.pdf`;
        doc.save(fileName);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const snapshot = await get(libraryRef);
                if (snapshot.exists()) {
                    const libraryList = snapshot.val();
                    const userEmail = auth.currentUser?.email;
                    if (!userEmail) {
                        console.error("User is not authenticated");
                        return;
                    }
                    let libraryBooks = [];
                    Object.keys(libraryList).forEach((libraryUid) => {
                        if (libraryList[libraryUid].email === userEmail) {
                            const bookList = libraryList[libraryUid].bookList;
                            Object.keys(bookList).forEach((bookId) => {
                                libraryBooks.push(bookList[bookId]);
                                // console.log("Book:", bookList[bookId]);
                            });
                        }
                    });
                    setLibraryBooks(libraryBooks);
                    setLoading(false);
                } else {
                    console.log("No data available");
                    setLoading(false);
                }
            } catch (error) {
                console.error(error);
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        const searchQuery = search.toLowerCase();
        const filteredBooks = libraryBooks.filter((book) => {
            return (
                book.bookName.toLowerCase().includes(searchQuery) ||
                book.bookId.toLowerCase().includes(searchQuery) ||
                book.author.toLowerCase().includes(searchQuery) ||
                book.librarySection.toLowerCase().includes(searchQuery) ||
                book.rackNo.toLowerCase().includes(searchQuery) ||
                book.genre.toLowerCase().includes(searchQuery) ||
                book.language.toLowerCase().includes(searchQuery) ||
                book.publisher.toLowerCase().includes(searchQuery) ||
                book.isbnNo.toLowerCase().includes(searchQuery)
            );
        });
        setFilteredBooks(filteredBooks);
    }, [search, libraryBooks]);

    return (
        <>
            <div className={Styles.bookDatabase}>
                <div className={Styles.nav}>
                    <div className={Styles.searchContainer}>
                        <GoSearch className={Styles.searchIcon} />
                        <input
                            type="search"
                            placeholder="Enter Book Name"
                            className={Styles.search}
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <button
                            className={Styles.searchbtn}
                            onChange={(e) => setSearch(e.target.value)}>
                            Search
                        </button>
                        <button
                            className={Styles.registerbtn}
                            onClick={routeHandler}>
                            <img src={qrImage} className={Styles.Qrcode} />
                            Register New Book
                        </button>
                    </div>
                </div>
                <div className={Styles.mainContainer}>
                    {loading ? (
                        <p className={Styles.loading}>Loading...</p>
                    ) : filteredBooks && filteredBooks.length > 0 ? (
                        filteredBooks.map((book, index) => (
                            // console.log("Rendering Book:", book),
                            <div key={index} className={Styles.bookCard}>
                                <div className={Styles.cards}>
                                    <div className={Styles.bookImg}>
                                        <img
                                            src={book.coverImage}
                                            alt="not get from db"
                                        />
                                    </div>
                                    <div className={Styles.bookDetails}>
                                        <div className={Styles.details1}>
                                            <p>
                                                <span>Book Name</span>
                                                {book.bookName}
                                            </p>
                                            <p>
                                                <span>Rack No.</span>{" "}
                                                {book.rackNo}
                                            </p>
                                        </div>
                                        <div className={Styles.details1}>
                                            <p>
                                                <span>Author</span>{" "}
                                                {book.author}
                                            </p>
                                            <p>
                                                <span>Book ID</span>{" "}
                                                {book.bookId}
                                            </p>
                                        </div>
                                        <div className={Styles.details1}>
                                            <p>
                                                <span>Pub Year</span>{" "}
                                                {book.publicationYear}
                                            </p>
                                            <p>
                                                <span>Publisher</span>{" "}
                                                {book.publisher}
                                            </p>
                                        </div>
                                        <div className={Styles.details1}>
                                            <p>
                                                <span>Language</span>{" "}
                                                {book.language}
                                            </p>
                                            <p>
                                                <span>Genre</span> {book.genre}
                                            </p>
                                        </div>
                                        <div className={Styles.details1}>
                                            <p>
                                                <span>Edition</span>{" "}
                                                {book.edition}
                                            </p>
                                            <p>
                                                <span>ISBN No.</span>{" "}
                                                {book.isbnNo}
                                            </p>
                                        </div>
                                        <div className={Styles.details1}>
                                            <p>
                                                <span>Library Section</span>{" "}
                                                {book.librarySection}
                                            </p>
                                            <p>
                                                <span>Page Count</span>{" "}
                                                {book.pageCount}
                                            </p>
                                        </div>
                                    </div>
                                    <div className={Styles.qrContainer}>
                                        {showQR && qrVisibility[book.bookId] ? (
                                            <div className={Styles.qr}>
                                                <QRCode
                                                    value={`${book.bookId}`}
                                                    fgColor="#4E4E4E"
                                                    // level="Q"
                                                    size={270}
                                                    id="qr-code"
                                                    className="qr-code"
                                                />
                                            </div>
                                        ) : (
                                            <div className={Styles.qr}>
                                                <img
                                                    src={qrImage}
                                                    alt="qrImage"
                                                />
                                                <p
                                                    className={
                                                        Styles.generateQR
                                                    }
                                                    onClick={() =>
                                                        handleGenerateQR(
                                                            book.bookId,
                                                            book
                                                        )
                                                    }>
                                                    Show QR
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className={Styles.description}>
                                    <p>{book.description}</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No books available</p>
                    )}
                </div>
            </div>
        </>
    );
};

export default BookDatabase;
