// import { useState } from "react";
import search from "/searchicon.svg";
import dropdown from "/dropdown.svg";
import Styles from "./UserDatabase.module.css";
const UserDatabase = () => {
  // const [isOpen, setIsOpen] = useState(false);
  const Details = [
    {
      email: "abcd",
      name:"Soumik",
      bookName: "ABCD",
      issueDate: "17/01/2025",
      submitDate: "23/01/2025",
    },
    {
      email: "abcd",
      name:"Shankha",
      bookName: "ABCD",
      issueDate: "17/01/2025",
      submitDate: "23/01/2025",
    },
    {
      email: "abccs",
      name:"Soumik",
      bookName: "ABCD",
      issueDate: "17/01/2025",
      submitDate: "23/01/2025",
    }
  ];


  return (
    <>
      <div className={Styles.UserDatabase}>
        <div className={Styles.Nav}>
          <div className={Styles.searchContainer}>
            <img src={search} alt="Search Icon" className={Styles.searchIcon} />
            <input
              type="search"
              placeholder="Enter Username"
              className={Styles.Search}
            />
            <button className={Styles.searchBtn}>Search</button>
          </div>
        </div>
        {Details.map((detail) => (
          <div key={detail.email} className={Styles.Udetails}>
            <div className={Styles.nameHeader}>
              <h2>{detail.name}</h2>
              <button className={Styles.Dbtn}>
                <img
                  src={dropdown}
                  alt="Dropdown-button"
                  className={Styles.dimg}
                />
              </button>
            </div>

            <div className={Styles.detail}>
              <div>{detail.bookName}</div>
              <div className={Styles.bookItem}>
                <div className={Styles.dateContainer}>
                  <div className={Styles.datedetails}>
                    Issue date : {detail.issueDate}&nbsp;&nbsp;
                  </div>
                  |
                  <div className={Styles.datedetails}>
                    Submit date : {detail.submitDate}
                  </div>
                </div>
              </div>
            </div>
            <div className={Styles.detail1}>
              <div>{detail.bookName}</div>
              <div className={Styles.bookItem}>
                <div className={Styles.dateContainer}>
                  <div className={Styles.datedetails}>
                    Issue date : {detail.issueDate}&nbsp;&nbsp;
                  </div>
                  |
                  <div className={Styles.datedetails}>
                    Submit date : {detail.submitDate}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))};
        
      </div>
    </>
  );
};
export default UserDatabase;
