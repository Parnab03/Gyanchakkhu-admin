import searchIcon from "/searchicon.svg";
import dropdown from "/dropdown.png";
import pending from "/book_pending.png";
import submited from "/book_submited.png";
import Styles from "./UserDatabase.module.css";
import { useState, useEffect } from "react";
import { getDatabase, ref, child, get } from "firebase/database";
import { getAuth } from "firebase/auth";

const UserDatabase = () => {
    const database = getDatabase();
    const auth = getAuth();

    const [libraryUsers, setLibraryUsers] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [loading, setLoading] = useState(true);
    const [dropdownStates, setDropdownStates] = useState({});

    const databaseRef = ref(database);
    const libraryRef = child(databaseRef, "libraryList/");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const snapshot = await get(libraryRef);
                if (snapshot.exists()) {
                    const libraryList = snapshot.val();
                    const userEmail = auth.currentUser?.email;
                    if (!userEmail) {
                        console.error("User    is not authenticated");
                        return;
                    }
                    let libraryUsers = {};

                    Object.keys(libraryList).forEach((libraryUid) => {
                        if (libraryList[libraryUid].email === userEmail) {
                            const libraryUserList =
                                libraryList[libraryUid].libraryUserList;
                            Object.keys(libraryUserList).forEach((userId) => {
                                const userBookDetails = libraryUserList[userId];
                                const bookDetailsArray = [];

                                Object.keys(userBookDetails).forEach(
                                    (bookId) => {
                                        if (
                                            bookId !== "name" &&
                                            bookId !== "cardUid"
                                        ) {
                                            const bookDetails =
                                                userBookDetails[bookId];
                                            bookDetailsArray.push(bookDetails);
                                        }
                                    }
                                );

                                const sortedBookDetails = bookDetailsArray.sort(
                                    (a, b) => {
                                        if (
                                            a.isSubmitted === false &&
                                            b.isSubmitted === true
                                        ) {
                                            return -1;
                                        } else if (
                                            a.isSubmitted === true &&
                                            b.isSubmitted === false
                                        ) {
                                            return 1;
                                        } else {
                                            const submitDateA = a.submitDate
                                                .split("/")
                                                .reverse()
                                                .join("-");
                                            const submitDateB = b.submitDate
                                                .split("/")
                                                .reverse()
                                                .join("-");
                                            return submitDateB.localeCompare(
                                                submitDateA
                                            );
                                        }
                                    }
                                );

                                libraryUsers[userId] = {
                                    ...libraryUserList[userId],
                                    bookDetails: sortedBookDetails,
                                };
                            });
                        }
                    });

                    setLibraryUsers(libraryUsers);
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

    const handleDropdownClick = (userId) => {
        setDropdownStates((prevDropdownStates) => ({
            ...prevDropdownStates,
            [userId]: !prevDropdownStates[userId],
        }));
    };

    return (
        <div className={Styles.UserDatabase}>
            {loading ? (
                <p className={Styles.loading}>Loading...</p>
            ) : (
                <div className={Styles.NavContainer}>
                    <div className={Styles.Nav}>
                        <div className={Styles.searchContainer}>
                            <img
                                src={searchIcon}
                                alt="Search Icon"
                                className={Styles.searchIcon}
                            />
                            <input
                                type="search"
                                placeholder="Enter Username or Card Number"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className={Styles.Search}
                            />
                            <button className={Styles.searchBtn}>Search</button>
                        </div>
                    </div>
                    {Object.keys(libraryUsers).length > 0 ? (
                        Object.keys(libraryUsers)
                            .filter((userId) => {
                                return (
                                    libraryUsers[userId].name
                                        .toLowerCase()
                                        .includes(searchQuery.toLowerCase()) ||
                                    libraryUsers[userId].cardUid
                                        .toLowerCase()
                                        .includes(searchQuery.toLowerCase())
                                );
                            })
                            .map((userId, index) => (
                                <div key={index} className={Styles.Udetails}>
                                    <div className={Styles.nameHeader}>
                                        <h2>{libraryUsers[userId].name}</h2>
                                        <div className={Styles.cardUid}>
                                            <h2>
                                                {libraryUsers[userId].cardUid}
                                            </h2>
                                            {libraryUsers[userId].bookDetails &&
                                            libraryUsers[userId].bookDetails
                                                .length > 2 ? (
                                                <button
                                                    className={Styles.dropdown}
                                                    onClick={() =>
                                                        handleDropdownClick(
                                                            userId
                                                        )
                                                    }>
                                                    <img
                                                        src={dropdown}
                                                        alt="Dropdown"
                                                        className={`dropdown dropdown-${userId}`}
                                                    />
                                                </button>
                                            ) : null}
                                        </div>
                                    </div>
                                    {dropdownStates[userId] &&
                                    libraryUsers[userId].bookDetails &&
                                    libraryUsers[userId].bookDetails.length >
                                        0 ? (
                                        libraryUsers[userId].bookDetails.map(
                                            (bookDetail, index) => (
                                                <div
                                                    key={index}
                                                    className={Styles.detail}>
                                                    <div
                                                        className={
                                                            Styles.bookname
                                                        }>
                                                        {bookDetail.bookName}
                                                    </div>
                                                    <div
                                                        className={
                                                            Styles.bookItem
                                                        }>
                                                        <div
                                                            className={
                                                                Styles.dateContainer
                                                            }>
                                                            <div
                                                                className={
                                                                    Styles.datedetails
                                                                }>
                                                                Issue date :{" "}
                                                                {
                                                                    bookDetail.issueDate
                                                                }{" "}
                                                                &nbsp;&nbsp;
                                                            </div>
                                                            |
                                                            <div
                                                                className={
                                                                    Styles.datedetails
                                                                }>
                                                                Submit date :{" "}
                                                                {
                                                                    bookDetail.submitDate
                                                                }
                                                            </div>
                                                            <div>
                                                                <img
                                                                    src={
                                                                        bookDetail.isSubmitted
                                                                            ? submited
                                                                            : pending
                                                                    }
                                                                    alt="Book Status"
                                                                    className={
                                                                        Styles.bookStatus
                                                                    }
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        )
                                    ) : libraryUsers[userId].bookDetails &&
                                      libraryUsers[userId].bookDetails.length >
                                          0 ? (
                                        libraryUsers[userId].bookDetails
                                            .slice(0, 2)
                                            .map((bookDetail, index) => (
                                                <div
                                                    key={index}
                                                    className={Styles.detail}>
                                                    <div
                                                        className={
                                                            Styles.bookname
                                                        }>
                                                        {bookDetail.bookName}
                                                    </div>
                                                    <div
                                                        className={
                                                            Styles.bookItem
                                                        }>
                                                        <div
                                                            className={
                                                                Styles.dateContainer
                                                            }>
                                                            <div
                                                                className={
                                                                    Styles.datedetails
                                                                }>
                                                                Issue date :{" "}
                                                                {
                                                                    bookDetail.issueDate
                                                                }{" "}
                                                                &nbsp;&nbsp;
                                                            </div>
                                                            |
                                                            <div
                                                                className={
                                                                    Styles.datedetails
                                                                }>
                                                                Submit date :{" "}
                                                                {
                                                                    bookDetail.submitDate
                                                                }
                                                            </div>
                                                            <div>
                                                                <img
                                                                    src={
                                                                        bookDetail.isSubmitted
                                                                            ? submited
                                                                            : pending
                                                                    }
                                                                    alt="Book Status"
                                                                    className={
                                                                        Styles.bookStatus
                                                                    }
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                    ) : (
                                        <p>No books issued yet.</p>
                                    )}
                                </div>
                            ))
                    ) : (
                        <p>No data available</p>
                    )}
                </div>
            )}
        </div>
    );
};
export default UserDatabase;
