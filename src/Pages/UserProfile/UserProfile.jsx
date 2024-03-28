import React from "react";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from "recharts";
import buyedfood from "../../UserBuying";
import { AiOutlineStar, AiTwotoneStar } from "react-icons/ai";

import Sidebar from "../../Components/Sidebar/Sidebar";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import "./UserProfile.css";
function UserProfile() {
  return (
    <>
      <Sidebar />
      <Header />
      <div className="profile">
        <div className="details">
          <span className="name">امیرصالح رضایی</span>
          <img
            src="./img/download5.png"
            alt="userProfile"
            className="user-profile-image"
          />
        </div>

        <div className="other-details">
          <div className="scorebox">
            <span className="score">امتیاز شما : </span>
            <AiOutlineStar className="score-icon" />
            <AiOutlineStar className="score-icon" />
            <AiTwotoneStar className="score-icon" />
            <AiTwotoneStar className="score-icon" />
            <AiTwotoneStar className="score-icon" />
          </div>
          <div className="last-buy">
            <span className="last-buy">آخرین خرید شما : </span>
            <span className="last-buy-date">3 روز پیش</span>
          </div>
          <div className="change-info">
            <button className="change">ویرایش اطلاعات</button>
          </div>
        </div>

        <h1 className="chart-title">سابقه خرید شما</h1>
        <div className="chart">
          <BarChart width={910} height={250} data={buyedfood}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis textAnchor="start" />
            <Tooltip />
            <Legend />
            <Bar dataKey="price" fill="#8884d8" />
          </BarChart>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default UserProfile;
