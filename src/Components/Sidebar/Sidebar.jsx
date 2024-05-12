import React from "react";
import { RxAvatar } from "react-icons/rx";
import { BiExit } from "react-icons/bi";
import { AiTwotoneHome } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import { FaRegQuestionCircle } from "react-icons/fa";
import { GiCook } from "react-icons/gi";
import { Link } from "react-router-dom";
import "./Sidebar.css";
function Sidebar({sidebarStatus}) {
  return (
    <>
      {/* {sidebarStatus === true  ( */}
        <div className={`static-sidebar ${sidebarStatus === true ? "sidebar" : "responsive-sidebar" }`} id="sideBar">
          <ul className="sidebar-menu">
            <Link to="/" className="sidebar-item-link active">
              <AiTwotoneHome /> صفحه اصلی
            </Link>
            <Link to="/userprofile" className="sidebar-item-link ">
              <RxAvatar /> مشاهده پروفایل
            </Link>
            <Link to="/cooklist" className="sidebar-item-link">
              <GiCook />
              لیست آشپز ها
            </Link>
            <Link to="/clientlist" className="sidebar-item-link">
              <FiUsers /> لیست مشتریان
            </Link>
            <Link to="/aboutus" className="sidebar-item-link">
              <FaRegQuestionCircle /> درباره ما
            </Link>
            <Link to="/login" className="sidebar-item-link">
              <BiExit /> خروج
            </Link>
          </ul>
        </div>
      {/* ) : null} */}
    </>
  );
}

export default Sidebar;
