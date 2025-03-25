import Styles from "./NoticeBoard.module.css";
import NewIcon from "/NewIcon.svg";
import ProfileNav from "../ProfileNavModule/ProfileNav";
import { NavLink } from "react-router-dom";

const NoticeBoard = () => {
    const notices = [
        {
            date: "26/03/2025",
            title: "Library Timings Updated – New operational hours starting from next month",
        },
        {
            date: "26/03/2025",
            title: "Upcoming Book Fair – Visit our library on 25/04/2025 to explore new arrivals!",
        },
        {
            date: "26/03/2025",
            title: "Due Date Reminder – Return borrowed books by 25/05/2025 to avoid late fees.",
        },
        {
            date: "26/03/2025",
            title: "New Books Added – Check out the latest additions in Fiction, Science, and more!",
        },
        {
            date: "26/03/2025",
            title: "Maintenance Alert – Library services will be unavailable on 25/05/2025 for system upgrades.",
        },
    ];

    return (
        <>
            <ProfileNav />
            <div className={Styles.noticeContainer}>
                <div className={Styles.searchAndAddContainer}>
                    <input
                        type="search"
                        className={Styles.SearchNotice}
                        placeholder="Search notices"
                    />
                    <button className={Styles.AddBtn}>Add Notice</button>
                </div>
                <div className={Styles.NoticeList}>
                    {notices.map((notice, index) => (
                        <div key={index} className={Styles.NoticeTitle}>
                            <div className={Styles.noticeDetails}>
                                <span className={Styles.noticeDate}>
                                    {notice.date}
                                </span>
                                <NavLink to="/profile/notice/noticecontent
                                " className={Styles.noticelink}>
                                    <span className={Styles.noticeTitle}>
                                        {notice.title}
                                    </span>
                                </NavLink>
                                <img
                                    src={NewIcon}
                                    alt="New Icon"
                                    className={Styles.noticeIcon}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default NoticeBoard;
