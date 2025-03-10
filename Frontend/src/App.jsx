import Register from "./Components/AuthModule/Register/Register";
import Navbar from "./Components/CommonModule/Navbar/Navbar";
import Footer from "./Components/CommonModule/Footer/Footer";
import BookDatabase from "./Components/BookDatabase/BookDatabaseMain/BookDatabase";
import RegisterBook from "./Components/BookDatabase/RegisterBook/RegisterBook";

import "./App.css";

function App() {
    return (
        <>
            <Navbar />
            <RegisterBook />
            {/* <BookDatabase /> */}
            <Footer />
            {/* <BookDatabase/> */}

            {/* <Register/> */}
        </>
    );
}

export default App;
