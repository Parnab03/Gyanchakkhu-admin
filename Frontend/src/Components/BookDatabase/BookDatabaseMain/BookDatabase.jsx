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
        coverImage:
          "https://preview.redd.it/fgy14jrd3af41.jpg?width=640&crop=smart&auto=webp&s=d1742942d8186732215742ae0310f723a6d7af30",
        bookId: "1001001",
        bookName: "DUNE",
        rackNo: "C2",
        author: "Frank Herbert",
        publicationYear: "2011",
        publisher: "Gyanchakkhu 24/7",
        librarySection: "A2",
        language: "English",
        genre: "Science Fiction",
        edition: "1st Edition",
        isbnNo: "ISBN100B001",
        pageCount: "321",
        description:
          "Set in a distant future where noble houses vie for control of planets, Dune follows Paul Atreides, a young heir whose family takes charge of the desert planet Arrakis—the only source of the universe’s most valuable substance, spice melange. As betrayal, war, and prophecy unfold, Paul embarks on a journey of survival, power, and destiny among the native Fremen.",
      },
      {
        coverImage:
          "https://preview.redd.it/fgy14jrd3af41.jpg?width=640&crop=smart&auto=webp&s=d1742942d8186732215742ae0310f723a6d7af30",
        bookId: "1001001",
        bookName: "DUNE",
        rackNo: "C2",
        author: "Frank Herbert",
        publicationYear: "2011",
        publisher: "Gyanchakkhu 24/7",
        librarySection: "A2",
        language: "English",
        genre: "Science Fiction",
        edition: "1st Edition",
        isbnNo: "ISBN100B001",
        pageCount: "321",
        description:
          "Set in a distant future where noble houses vie for control of planets, Dune follows Paul Atreides, a young heir whose family takes charge of the desert planet Arrakis—the only source of the universe’s most valuable substance, spice melange. As betrayal, war, and prophecy unfold, Paul embarks on a journey of survival, power, and destiny among the native Fremen.",
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
                <div className={Styles.cards}>
                  <div className={Styles.bookImg}>
                    <img src={book.coverImage} alt="#" />
                  </div>
                  <div className={Styles.bookDetails}>
                    <div className={Styles.details1}>
                      <p>
                        <span>Book Name </span>
                        {book.bookName}
                      </p>
                      <p>
                        <span>Rack No.</span> {book.rackNo}
                      </p>
                    </div>
                    <div className={Styles.details1}>
                      <p>
                        <span>Author</span> {book.author}
                      </p>
                      <p>
                        <span>Book ID</span> {book.bookId}
                      </p>
                    </div>
                    <div className={Styles.details1}>
                      <p>
                        <span>Pub Year</span> {book.publicationYear}
                      </p>
                      <p>
                        <span>Publisher</span> {book.publisher}
                      </p>
                    </div>
                    <div className={Styles.details1}>
                      <p>
                        <span>Language</span> {book.language}
                      </p>
                      <p>
                        <span>Genre</span> {book.genre}
                      </p>
                    </div>
                    <div className={Styles.details1}>
                      <p>
                        <span>Edition</span> {book.edition}
                      </p>
                      <p>
                        <span>ISBN No.</span> {book.isbnNo}
                      </p>
                    </div>
                    <div className={Styles.details1}>
                      <p>
                        <span>Library Section</span> {book.librarySection}
                      </p>
                      <p>
                        <span>Page Count</span> {book.pageCount}
                      </p>
                    </div>
                    <p>{/* <span>Description:</span> {book.description} */}</p>
                  </div>
                  <div className={Styles.bookQr}>
                    <img src={QrCode} alt="#" />
                    <p>Show QR</p>
                  </div>
                </div>
                <div className={Styles.description}>
                  <p>{book.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
};

export default BookDatabase;
