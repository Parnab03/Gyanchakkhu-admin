import Styles from "./BookDatabase.module.css";
import { GoSearch } from "react-icons/go";
import QrCode from "/QrCode.svg";
import { useNavigate } from "react-router-dom";

const BookDatabase = () => {
    const navigate = useNavigate();
    const routeHandler = () => {
        navigate("/bookdatabase/registerbook");
    };
    const books = [
      {
        id: "1001001",
        name: "Do Epic Shit",
        section: "3A",
        rack: "R2",
        description:
          "Do Epic Shit by Ankur Warikoo is a self-help book filled with insights on personal growth, success, and mindset. It covers topics like habits, failure, entrepreneurship, and self-awareness in a simple, engaging, and relatable way. The book is a mix of life lessons, real experiences, and practical advice, encouraging readers to take risks and create an impact.",
        qrCode: "qr-code-url",
      },
      {
        id: "1001001",
        name: "Do Epic Shit",
        section: "3A",
        rack: "R2",
        description:
          "Do Epic Shit by Ankur Warikoo is a self-help book filled with insights on personal growth, success, and mindset. It covers topics like habits, failure, entrepreneurship, and self-awareness in a simple, engaging, and relatable way. The book is a mix of life lessons, real experiences, and practical advice, encouraging readers to take risks and create an impact.",
        qrCode: "qr-code-url",
      },
    ];

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
              />
              <button className={Styles.searchbtn}>Search</button>
              <button className={Styles.registerbtn} onClick={routeHandler}>
                <img src={QrCode} className={Styles.Qrcode} />
                Register New Book
              </button>
            </div>
          </div>
            <div className={Styles.mainContainer}>
              {books.map((book) => (
                <div key={book.id} className={Styles.bookCard}>
                  <div className={Styles.bookDetails}>
                    <div className={Styles.details1}>
                      <p>
                        <span>Book Name: {book.name}</span>
                      </p>
                      <p>
                        <span>Library Section:</span> {book.section}
                      </p>
                    </div>
                    <div className={Styles.details2}>
                      <p>
                        <span>Book ID:</span> {book.id}
                      </p>
                      <p>
                        <span>Rack No:</span> {book.rack}
                      </p>
                    </div>
                    <p>
                      <span>Description:</span> {book.description}
                    </p>
                  </div>
                  <div className={Styles.bookQr}>
                    <img src={QrCode} alt="#" />
                  </div>
                </div>
              ))}
            </div>
          </div>
      </>
    );
};

export default BookDatabase;
