import Styles from './BookDatabase.module.css'; 
import { GoSearch } from "react-icons/go";
import QrCode from '/QrCode.svg';
const BookDatabase = () => {    
    return (
      <div className={Styles.bookDatabase}>
        <div className={Styles.nav}>
          <div className={Styles.searchContainer}>
            <GoSearch className={Styles.searchIcon} />
            <input
              type="search"
              placeholder="Enter Username"
              className={Styles.search}
            />
          </div>
          <button className={Styles.searchbtn}>Search</button>
          <button className={Styles.registerbtn}> <img src={QrCode} alt=""  className={Styles.Qrcode}/>Register New Book </button>
        </div>
        <div className={Styles.mainContainer}></div>
      </div>
    );
}
export default BookDatabase;