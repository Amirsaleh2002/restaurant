import React, { useState } from "react";
import "./Category.css";

function Category() {

  const [category , setCategory] = useState("همه")


  return (
    <>
      <div className="categories">
        <ul className="category-menu">
          <li className="category-name category-active" onClick={() => {
            setCategory("همه")
          }}>همه</li>
          <li className="category-name" onClick={() => {
            setCategory("پیتزا")
          }}>پیتزا</li>
          <li className="category-name" onClick={() => {
            setCategory("ساندویچ")
          }}>ساندویچ</li>
          <li className="category-name" onClick={() => {
            setCategory("سنتی")
          }}>سنتی</li>
          <li className="category-name" onClick={() => {
            setCategory("محلی")
          }}>محلی</li>
          <li className="category-name" onClick={() => {
            setCategory("سینی")
          }}>سینی</li>
          <li className="category-name" onClick={() => {
            setCategory("نوشیدنی")
          }}>نوشیدنی</li>
          <li className="category-name" onClick={() => {
            setCategory("سالاد")
          }}>سالاد</li>
        </ul>
      </div>
    </>
  );
}

export default Category;
