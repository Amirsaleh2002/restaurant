import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import NotifBox from "../../Components/NotifBox/NotifBox";
import { useState } from "react";
import { useEffect } from "react";
import "./Notifications.css";
function Notifications() {
  const [allNotifications, setAllNotifications] = useState([]);

  function getAllNotifs() {
    fetch("http://localhost:4000/notifs")
      .then((res) => res.json())
      .then((notifs) => setAllNotifications(notifs));
  }
  useEffect(() => {
    getAllNotifs();
  }, []);

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
      <Sidebar />
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
