import React, { useState } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { RxHamburgerMenu } from "react-icons/rx";


import "./FoodDetails.css";
function FoodDetails() {
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

      <Footer />
    </>
  );
}

export default FoodDetails;
