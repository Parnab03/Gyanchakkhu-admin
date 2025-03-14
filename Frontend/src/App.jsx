import Register from "./Components/AuthModule/Register/Register";
import Login from "./Components/AuthModule/Login/Login";
import Navbar from "./Components/CommonModule/Navbar/Navbar";
import Footer from "./Components/CommonModule/Footer/Footer";
import BookDatabase from "./Components/BookDatabase/BookDatabaseMain/BookDatabase";
import RegisterBook from "./Components/BookDatabase/RegisterBook/RegisterBook";
import UserDatabase from "./Components/UserDatabase/UserDatabase";

import "./App.css";

function App() {
    return (
        <>
            {/* <Navbar /> */}
            {/* <RegisterBook/> */}
            {/* <BookDatabase /> */}
            {/* <Footer /> */}
            {/* <BookDatabase/> */}
            <UserDatabase></UserDatabase>
            {/* <Register/> */}
            {/* <Login/> */}
        </>
    );
}

export default App;
