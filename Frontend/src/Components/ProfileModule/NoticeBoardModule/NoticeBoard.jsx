import Styles from "./NoticeBoard.module.css";
import NewIcon from "/NewIcon.svg";
import ProfileNav from "../ProfileNavModule/ProfileNav";
const NoticeBoard = () => {
  return (
    <>
    <ProfileNav/>
      <div className={Styles.Noticeboard}>
        <div className={Styles.noticeContainer}>
          <input
            type="search"
            placeholder="Enter Notice Title"
            className={Styles.SearchNotice}
          />
          <div>
            <button className={Styles.AddBtn}>Add</button>
          </div>
        </div>
        <div className={Styles.NoticeList}>
          <div className={Styles.NoticeTitle}>
            <div>
              <span>20/01/2025</span>
            </div>
            <div>
              <span>ALL BOOK SUBMITTED BY DATE 20/01/2025</span>
            </div>
            <img src={NewIcon} alt="Newicon" />
          </div>
        </div>
      </div>
    </>
  );
};
export default NoticeBoard;
