import Register from "./Components/AuthModule/Register/Register";
import Login from "./Components/AuthModule/Login/Login";
import Navbar from "./Components/CommonModule/Navbar/Navbar";
import Footer from "./Components/CommonModule/Footer/Footer";
import BookDatabase from "./Components/BookDatabase/BookDatabaseMain/BookDatabase";
import RegisterBook from "./Components/BookDatabase/RegisterBook/RegisterBook";
import Error from "./Components/ErrorModule/Error";
import UserDatabase from "./Components/UserDatabase/UserDatabase";
import Profile from "./Components/ProfileModule/Profile";
import NoticeBoard from "./Components/ProfileModule/NoticeBoardModule/NoticeBoard";
import NoticeContent from "./Components/ProfileModule/NoticeBoardModule/NoticeBoardContentModule/NoticeContent";
import Download from "./Components/DownloadModule/Download";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
    // const auth = getAuth();
    // const [user, setUser] = useState(null);
    // useEffect(() => {
    //     onAuthStateChanged(auth, (user) => {
    //         if (user) {
    //             setUser(user);
    //             console.log("User  is logged in");
    //         } else {
    //             setUser(null);
    //             alert("You are not logged in");
    //         }
    //     });
    // }, []);

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={<Navigate to="/login" replace />}
                    />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route
                        path="/bookdatabase"
                        element={
                            <>
                                <Navbar />
                                <BookDatabase />
                                <Footer />
                            </>
                        }
                    />
                    <Route
                        path="/bookdatabase/registerbook"
                        element={
                            <>
                                <Navbar />
                                <RegisterBook />
                                <Footer />
                            </>
                        }
                    />
                    <Route
                        path="/userdatabase"
                        element={
                            <>
                                <Navbar />
                                <UserDatabase />
                                <Footer />
                            </>
                        }
                    />
                    <Route
                        path="/profile"
                        element={
                            <>
                                <Navbar />
                                <Profile />
                                <Footer />
                            </>
                        }
                    />
                    <Route
                        path="/profile/notice"
                        element={
                            <>
                                <Navbar />
                                <NoticeBoard />
                                <Footer />
                            </>
                        }
                    />
                    <Route
                        path="/profile/notice/noticecontent"
                        element={
                            <>
                                <NoticeContent />
                            </>
                        }
                    />
                    <Route path="/download" element={<Download />} />
                    <Route path="/*" element={<Error />} />
                </Routes>
                {/* <Routes>
                    {user ? (
                        <Route
                            path="/"
                            element={<Navigate to="/bookdatabase" replace />}
                        />
                    ) : (
                        <Route
                            path="/"
                            element={<Navigate to="/login" replace />}
                        />
                    )}
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    {user ? (
                        <>
                            <Route
                                path="/bookdatabase"
                                element={
                                    <>
                                        <Navbar />
                                        <BookDatabase />
                                        <Footer />
                                    </>
                                }
                            />
                            <Route
                                path="/bookdatabase/registerbook"
                                element={
                                    <>
                                        <Navbar />
                                        <RegisterBook />
                                        <Footer />
                                    </>
                                }
                            />
                            <Route
                                path="/userdatabase"
                                element={
                                    <>
                                        <Navbar />
                                        <UserDatabase />
                                        <Footer />
                                    </>
                                }
                            />
                            <Route
                                path="/profile"
                                element={
                                    <>
                                        <Navbar />
                                        <Profile />
                                        <Footer />
                                    </>
                                }
                            />
                        </>
                    ) : (
                        <>
                            <Route
                                path="/bookdatabase"
                                element={
                                    <>
                                        <Navigate to="/login" replace />
                                    </>
                                }
                            />
                            <Route
                                path="/bookdatabase/registerbook"
                                element={
                                    <>
                                        <Navigate to="/login" replace />
                                    </>
                                }
                            />
                            <Route
                                path="/userdatabase"
                                element={
                                    <>
                                        <Navigate to="/login" replace />
                                    </>
                                }
                            />
                            <Route
                                path="/profile"
                                element={
                                    <>
                                        <Navigate to="/login" replace />
                                    </>
                                }
                            />
                        </>
                    )}
                    <Route path="/*" element={<Error />} />
                </Routes> */}
            </BrowserRouter>
        </>
    );
}

export default App;
