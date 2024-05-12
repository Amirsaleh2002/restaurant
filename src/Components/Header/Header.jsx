import React, { useState, useEffect } from "react";
import { BiSearch } from "react-icons/bi";
import { BsCart4 } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import "./Header.css";

function Header() {
  const [allNotifications, setAllNotifications] = useState([
    {
      id: "2",
      text: "لطفا حساب خود را شارژ کنید تا بتوانید توی قرعه کشی برنده شوید.",
    },
    {
      id: "3",
      text: "لطفا حساب خود را شارژ کنید تا بتوانید توی قرعه کشی برنده شوید.",
    },
    {
      id: "4",
      text: "لطفا حساب خود را شارژ کنید تا بتوانید توی قرعه کشی برنده شوید.",
    },
    {
      id: "5",
      text: "لطفا حساب خود را شارژ کنید تا بتوانید توی قرعه کشی برنده شوید.",
    },
  ]);
  const [basketFood, setBasketFood] = useState([
    {
      id: "9",
      title: "نوشابه",
      price: 25000,
      image: "./img/soda.jpg",
      foodCount: 2,
    },
    {
      id: "8",
      title: "سینی 5 نفره",
      price: 299000,
      image: "./img/sini5.jpg",
      foodCount: 2,
    },
    {
      id: "12",
      title: "قروتی",
      price: 450000,
      image: "./img/ghorouti.jpg",
      foodCount: 1,
    },
    {
      id: "13",
      title: "همبرگر",
      price: 65000,
      image: "./img/hamburgur.jpg",
      foodCount: 2,
    },
    {
      id: "11",
      title: "سالاد شیرازی",
      price: 30000,
      image: "./img/salade shirazi.jpg",
      foodCount: 2,
    },
    {
      id: "10",
      title: "سالاد فصل",
      price: 30000,
      image: "./img/salade fasl.jpg",
      foodCount: 2,
    },
  ]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // if we have real bakcend we use commands below

  // useEffect(() => {
  //   fetch("http://localhost:4000/notifs")
  //     .then((res) => res.json())
  //     .then((notifs) => setAllNotifications(notifs));
  // }, []);

  // const showSidebar = () => {
  //   document.querySelector(".sidebar").style.right = "0";
  //   document.querySelector(".sidebar").style.zIndex = "3";
  //   setIsSidebarOpen(true);
  // };

  // if (isSidebarOpen) {
  //   document.addEventListener("click", (event) => {
  //     event.preventDefault();
  //     if (!event.target.className.includes("sidebar")) {
  //       document.querySelector(".sidebar").style.right = "-200px";
  //       setIsSidebarOpen(false);
  //     }
  //   });
  // }
  //   document.addEventListener("click", (event) => {
  //     event.preventDefault();
  //     if (!event.target.className.includes('sidebar')) {
  //       setIsSidebarOpen(false);
  //     }
  //   });

  return (
    <>
      <div className="header">
        <div className="right-header">
          {/* <div className="hamburgur-menu">
            <RxHamburgerMenu onClick={showSidebar} />
          </div> */}

          <div className="search-box">
            <input type="text" className="search" placeholder="جستجو . . ." />
            <button className="search-btn">
              <BiSearch />
            </button>
          </div>
        </div>
        <div className="header-left">
          <Link to="/userbasket" className="notif-box">
            {basketFood.length > 0 && (
              <span className="notif-num">{basketFood.length}</span>
            )}
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
