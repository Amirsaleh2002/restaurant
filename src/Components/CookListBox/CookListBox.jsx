import React from "react";
import { Link } from "react-router-dom";
import "./CookListBox.css";

function CookListBox() {
  return (
    <div className="cook-box">
      <a href="#">
        <img
          src="./img/download5.png"
          alt="cook box"
          className="cook-box-img"
        />
      </a>
      <div className="cook-details">
        <h1 className="cook-name">حمید ریخته گر زاده</h1>
        <p className="cook-history">سابقه : 5 سال</p>
        <Link to={`/cooklist/1`} className="cook-more">
          جزئیات بیشتر
        </Link>
      </div>
    </div>
  );
}

export default CookListBox;
