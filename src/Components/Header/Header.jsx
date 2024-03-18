import React, { useState, useEffect } from "react";
import { BiSearch } from "react-icons/bi";
import { BsCart4 } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import "./Header.css";

function Header() {
  const [allNotifications, setAllNotifications] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);


  useEffect(() => {
    fetch("http://localhost:4000/notifs")
      .then((res) => res.json())
      .then((notifs) => setAllNotifications(notifs));
  }, []);

  const showSidebar = () => {
    document.querySelector(".sidebar").style.right = "0";
    document.querySelector(".sidebar").style.zIndex = "3";
    setIsSidebarOpen(true);
  };

  if (isSidebarOpen) {
    document.addEventListener("click", (event) => {
      event.preventDefault();
      if (!event.target.className.includes("sidebar")) {
        document.querySelector(".sidebar").style.right = "-200px";
        setIsSidebarOpen(false);
      }
    });
  }
    document.addEventListener("click", (event) => {
      event.preventDefault();
      if (!event.target.className.includes('sidebar')) {
        setIsSidebarOpen(false);
      }
    });
  // useEffect(() => {
  //   if (isSidebarOpen) {
  //     document.querySelector(".sidebar").style.right = "0";
  //     document.querySelector(".sidebar").style.zIndex = "3";
  //   }
  //   if (!isSidebarOpen) {
  //     document.querySelector(".sidebar").style.right = "-200px";
  //   }
  // }, [isSidebarOpen]);

  return (
    <>
      <div className="header">
        <div className="right-header">
          <div className="hamburgur-menu">
            <RxHamburgerMenu onClick={showSidebar} />
          </div>

          <div className="search-box">
            <input type="text" className="search" placeholder="جستجو . . ." />
            <button className="search-btn">
              <BiSearch />
            </button>
          </div>
        </div>
        <div className="header-left">
          <Link to="/userbasket">
            <BsCart4 className="cart" />
          </Link>
          <Link to="/notifications" className="notif-box">
            {allNotifications.length > 0 && (
              <span className="notif-num">{allNotifications.length}</span>
            )}
            <IoMdNotificationsOutline className="notif" />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Header;
