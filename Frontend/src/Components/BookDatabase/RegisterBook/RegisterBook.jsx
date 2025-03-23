import Styles from "./RegisterBook.module.css";
import QrCode from "/QrCode.svg";
import Back from "/Back.svg";
import tempQr from "./QRGenerator/tempQr.png";
import { useNavigate } from "react-router-dom";

const RegisterBook = () => {
    const navigate = useNavigate();
    const routeHandler = () => {
        navigate("/bookdatabase");
    };
    return (
      <>
        <div className={Styles.Regmain}>
          <div className={Styles.nav}>
            <div className={Styles.Regcont}>
              <button className={Styles.backbtn} onClick={routeHandler}>
                <img src={Back} alt="" className={Styles.back} /> Back
              </button>

              <button className={Styles.registerbtn}>
                <img src={QrCode} alt="" className="Qrcode" />
                Registering New Book
              </button>

              <button className={`${Styles.backbtn} ${Styles.nobtn}`}>
                <img src={Back} alt="" className={Styles.back} /> Back
              </button>
            </div>
          </div>
          <div className={Styles.secondpart}>
            <div className={Styles.Main}>
              {/* <h1 className={Styles.header}>Enter Book Details</h1> */}
              <div className={Styles.mainform}>
                <form action="" className={Styles.form}>
                  <div className={Styles.details1}>
                    <div className={Styles.formGroup}>
                      <label htmlFor="bookname">Book Name</label>
                      <input
                        type="text"
                        name="bookname"
                        i
                        d="bookname"
                        placeholder="Enter Book Name"
                      />
                    </div>
                    <div className={Styles.formGroup}>
                      <label htmlFor="librarysection">Book ID</label>
                      <input
                        type="text"
                        name="librarysection"
                        id="librarysection"
                        placeholder="Enter Book ID"
                      />
                    </div>
                  </div>
                  <div className={Styles.details1}>
                    <div className={Styles.formGroup}>
                      <label htmlFor="author">Author</label>
                      <input
                        type="text"
                        name="bookid"
                        id="bookid"
                        placeholder="Enter Book Author Name"
                      />
                    </div>

                    <div className={Styles.formGroup}>
                      <label htmlFor="rackno">Publisher</label>
                      <input
                        type="text"
                        name="rackno"
                        id="rackno"
                        placeholder="Enter Publisher"
                      />
                    </div>
                  </div>
                  <div className={Styles.details1}>
                    <div className={Styles.formGroup}>
                      <label htmlFor="author">Pub. Year</label>
                      <input
                        type="text"
                        name="bookid"
                        id="bookid"
                        placeholder="Enter Pub Year"
                      />
                    </div>

                    <div className={Styles.formGroup}>
                      <label htmlFor="rackno">Genre</label>
                      <input
                        type="text"
                        name="rackno"
                        id="rackno"
                        placeholder="Enter Genre"
                      />
                    </div>
                  </div>
                  <div className={Styles.details1}>
                    <div className={Styles.formGroup}>
                      <label htmlFor="author">Language</label>
                      <input
                        type="text"
                        name="bookid"
                        id="bookid"
                        placeholder="Enter Book Language"
                      />
                    </div>

                    <div className={Styles.formGroup}>
                      <label htmlFor="rackno">ISBN No.</label>
                      <input
                        type="text"
                        name="rackno"
                        id="rackno"
                        placeholder="Enter ISBN No."
                      />
                    </div>
                  </div>
                  <div className={Styles.details1}>
                    <div className={Styles.formGroup}>
                      <label htmlFor="author">Edition</label>
                      <input
                        type="text"
                        name="bookid"
                        id="bookid"
                        placeholder="Enter Book Edition"
                      />
                    </div>

                    <div className={Styles.formGroup}>
                      <label htmlFor="rackno">Page Count</label>
                      <input
                        type="text"
                        name="rackno"
                        id="rackno"
                        placeholder="Enter Page Count"
                      />
                    </div>
                  </div>
                  <div className={Styles.details1}>
                    <div className={Styles.formGroup}>
                      <label htmlFor="author">Rack No.</label>
                      <input
                        type="text"
                        name="bookid"
                        id="bookid"
                        placeholder="Enter Rack No."
                      />
                    </div>

                    <div className={Styles.formGroup}>
                      <label htmlFor="rackno">Library Section</label>
                      <input
                        type="text"
                        name="rackno"
                        id="rackno"
                        placeholder="Enter Library Section"
                      />
                    </div>
                  </div>
                  <div className={Styles.details1}>
                    <div className={Styles.formGroup2}>
                      <label htmlFor="author">Cover image</label>
                      <input
                        type="file"
                        name="bookid"
                        id="bookid"
                        placeholder=""
                      />
                    </div>
                  </div>
                  <div className={Styles.formGroup1}>
                    <label htmlFor="description">Description</label>
                    <input
                      name="description"
                      id="description"
                      placeholder="Enter Description"
                    ></input>
                  </div>
                </form>
                <div className={Styles.QrMain}>
                  <div className={Styles.QrContainer}>
                    <img src={tempQr} alt="" className={Styles.Qrcode} />
                    <p>Generate New Book QR </p>
                  </div>
                  <div className={Styles.buttons}>
                    <button type="submit" className={Styles.btn2}>
                      Print QR
                    </button>
                    <button type="submit" className={Styles.btn1}>
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
