// import { useState } from "react";
import search from "/searchicon.svg";
import dropdown from "/dropdown.svg";
import Styles from "./UserDatabase.module.css";
const UserDatabase = () => {
  // const [isOpen, setIsOpen] = useState(false);

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
        <div className={Styles.Udetails}>
          <div className={Styles.nameHeader}>
            <h2>Soumik Ghosh</h2>
            <button className={Styles.Dbtn}>
              <img
                src={dropdown}
                alt="Dropdown-button"
                className={Styles.dimg}
              />
            </button>
          </div>

          <div className={Styles.detail}>
            <div>Chemistry Book</div>
            <div className={Styles.bookItem}>
              <div className={Styles.dateContainer}>
                <div className={Styles.datedetails}>
                  Issue date : --/--/----
                </div>
                |
                <div className={Styles.datedetails}>
                  Submit date : --/--/----
                </div>
              </div>
            </div>
          </div>
          <div className={Styles.detail1}>
            <div>Physics Book</div>
            <div className={Styles.bookItem}>
              <div className={Styles.dateContainer}>
                <div className={Styles.datedetails}>
                  Issue date : --/--/----
                </div>
                |
                <div className={Styles.datedetails}>
                  Submit date : --/--/----
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={Styles.Udetails}>
          <div className={Styles.nameHeader}>
            <h2>Rupam Samanta</h2>
            <button className={Styles.Dbtn}>
              <img
                src={dropdown}
                alt="Dropdown-button"
                className={Styles.dimg}
              />
            </button>
          </div>

          <div className={Styles.detail}>
            <div>Chemistry Book</div>
            <div className={Styles.bookItem}>
              <div className={Styles.dateContainer}>
                <div className={Styles.datedetails}>
                  Issue date : --/--/----
                </div>
                |
                <div className={Styles.datedetails}>
                  Submit date : --/--/----
                </div>
              </div>
            </div>
          </div>
          <div className={Styles.detail1}>
            <div>Physics Book</div>
            <div className={Styles.bookItem}>
              <div className={Styles.dateContainer}>
                <div className={Styles.datedetails}>
                  Issue date : --/--/----
                </div>
                |
                <div className={Styles.datedetails}>
                  Submit date : --/--/----
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default UserDatabase;
