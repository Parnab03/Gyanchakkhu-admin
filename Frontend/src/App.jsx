import Register from "./Components/AuthModule/Register/Register";
import Login from "./Components/AuthModule/Login/Login";
import Navbar from "./Components/CommonModule/Navbar/Navbar";
import Footer from "./Components/CommonModule/Footer/Footer";
import BookDatabase from "./Components/BookDatabase/BookDatabaseMain/BookDatabase";
import RegisterBook from "./Components/BookDatabase/RegisterBook/RegisterBook";
import Error from "./Components/ErrorModule/Error";
import UserDatabase from "./Components/UserDatabase/UserDatabase";

import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";

function App() {
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
                                <UserDatabase/>
                                <Footer />
                            </>
                        }
                    />
                    <Route
                        path="/profile"
                        element={
                            <>
                                <Navbar />
                                <Footer />
                            </>
                        }
                    />
                    <Route path="/*" element={<Error />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
