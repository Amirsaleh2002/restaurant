import React, { useEffect, useState } from "react";
import FoodBox from "../../Components/FoodBox/FoodBox";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Header from "../../Components/Header/Header";
import Category from "../../Components/Category/Category";
import Footer from "../../Components/Footer/Footer";
import CookListBox from "../../Components/CookListBox/CookListBox";
import { RxHamburgerMenu } from "react-icons/rx";

import "./CookList.css";

function CookList() {

  const [sidebarStatus, setSidebarStatus] = useState(false);

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
      <div className="cook-list">
        <div className="cooks">
          <CookListBox />
          <CookListBox />
          <CookListBox />
          <CookListBox />
          <CookListBox />
          <CookListBox />
          <CookListBox />
          <CookListBox />
          <CookListBox />
          <CookListBox />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CookList;
