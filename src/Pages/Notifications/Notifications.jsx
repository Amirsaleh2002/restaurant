import React , {useState , useEffect} from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import NotifBox from "../../Components/NotifBox/NotifBox";
import { RxHamburgerMenu } from "react-icons/rx";

import "./Notifications.css";
function Notifications() {
  const [allNotifications, setAllNotifications] = useState([
    {
      "id": "2",
      "text": "لطفا حساب خود را شارژ کنید تا بتوانید توی قرعه کشی برنده شوید."
    },
    {
      "id": "3",
      "text": "لطفا حساب خود را شارژ کنید تا بتوانید توی قرعه کشی برنده شوید."
    },
    {
      "id": "4",
      "text": "لطفا حساب خود را شارژ کنید تا بتوانید توی قرعه کشی برنده شوید."
    },
    {
      "id": "5",
      "text": "لطفا حساب خود را شارژ کنید تا بتوانید توی قرعه کشی برنده شوید."
    }
  ]);
  const [sidebarStatus, setSidebarStatus] = useState(false);


  // function getAllNotifs() {
  //   fetch("http://localhost:4000/notifs")
  //     .then((res) => res.json())
  //     .then((notifs) => setAllNotifications(notifs));
  // }
  // useEffect(() => {
  //   getAllNotifs();
  // }, []);

  const removingNotif = (notifID) => {
    fetch(`http://localhost:4000/notifs/${notifID}`, {
      method: "DELETE",
    }).then((res) => {
      if (res.ok) {
        getAllNotifs();
      }
    });
  };

  return (
    <>
      <Sidebar sidebarStatus={sidebarStatus} />

      <div
        className={`hamburgur-menu ${
          sidebarStatus === true ? "escape-from-sidebar" : ""
        }`}
      >
        <RxHamburgerMenu onClick={() => setSidebarStatus((prev) => !prev)} />
      </div>
      <Header />

      <div className="allNotifsBox">
        {allNotifications.length ? (
          allNotifications.map((eachNotif) => (
            <NotifBox
              key={eachNotif.id}
              {...eachNotif}
              onRemove={() => removingNotif(eachNotif.id)}
            />
          ))
        ) : (
          <>
            <div className="no-notif">
              <p className="no-notif-text">اعلانی ندارید</p>
            </div>
          </>
        )}
      </div>

      <Footer />
    </>
  );
}

export default Notifications;
