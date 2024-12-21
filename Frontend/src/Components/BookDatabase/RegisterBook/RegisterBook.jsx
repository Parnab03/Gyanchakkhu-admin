import Styles from './RegisterBook.module.css'
import QrCode from '/QrCode.svg';
import Back from '/Back.svg';
import QrMain from '/QrMain.svg';
const RegiterBook = () => {
    return (
      <div className={Styles.Regmain}>
        <div className={Styles.nav}>
          <div className={Styles.Regcont}>
            <button className={Styles.backbtn}>
              <img src={Back} alt="" className={Styles.back} /> Back
            </button>

            <button className={Styles.registerbtn}>
              <img src={QrCode} alt="" className="Qrcode" />
              Registering New Book
            </button>
          </div>
        </div>

        <div className={Styles.Main}>
          <h1 className={Styles.header}>Enter Book Details</h1>
          <div className={Styles.mainform}>
            <form action="" className={Styles.form}>
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
                <label htmlFor="author">Book Id</label>
                <input
                  type="text"
                  name="bookid"
                  id="bookid"
                  placeholder="Enter Book Id"
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

              <div className={Styles.formGroup}>
                <label htmlFor="rackno">Rack No.</label>
                <input
                  type="text"
                  name="rackno"
                  id="rackno"
                  placeholder="Enter Rack No."
                />
              </div>
            </form>
            <div className={Styles.qr}>
              <img src={QrMain} alt="" className={Styles.Qrcode} />
            </div>
          </div>
          <div className={Styles.buttons}>
            <button type="submit" className={Styles.btn1}>
              Generate New Qr
            </button>
            <button type="submit" className={Styles.btn2}>
              Print Qr
            </button>
          </div>
        </div>
      </div>
    );
}
export default RegiterBook;