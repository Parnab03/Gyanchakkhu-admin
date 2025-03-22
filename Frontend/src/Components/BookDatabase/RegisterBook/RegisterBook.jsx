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
                      <label htmlFor="librarysection">Library Section</label>
                      <input
                        type="text"
                        name="librarysection"
                        id="librarysection"
                        placeholder="Enter Library Section"
                      />
                    </div>
                  </div>
                  <div className={Styles.details2}>
                    <div className={Styles.formGroup}>
                      <label htmlFor="author">Book Id</label>
                      <input
                        type="text"
                        name="bookid"
                        id="bookid"
                        placeholder="Enter Book Id"
                      />
                    </div>

                    <div className={Styles.formGroup}>
                      <label htmlFor="rackno">Rack No.</label>
                      <input
                        type="text"
                        name="rackno"
                        id="rackno"
                        placeholder="Enter Rack No."
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
                  <img src={tempQr} alt="" className={Styles.Qrcode} />
                </div>
              </div>
              <div className={Styles.buttons}>
                <button type="submit" className={Styles.btn1}>
                  Generate New QR
                </button>
                <button type="submit" className={Styles.btn2}>
                  Print QR
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
};
export default RegisterBook;
